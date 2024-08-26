import express from "express";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = 3000;

const resend = new Resend(process.env.RESEND_API_KEY);

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "",
  useCdn: true,
  token: process.env.SANITY_TOKEN || "",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/data", async (req, res) => {
  try {
    const principalQuery =
      '*[_type == "principal"]{logo, title, subTitle, image1, image2, image3, image4, image5}';
    const aboutQuery =
      '*[_type == "about"]{title, subTitle, cardTitle1, cardDescription1, cardTitle2, cardDescription2, cardTitle3, cardDescription3}';
    const insertsQuery =
      '*[_type == "inserts"]{title, subTitle, insertTitle1, insertSubTitle1, insertImage1, insertTitle2, insertSubTitle2, insertImage2, insertTitle3, insertSubTitle3, insertImagem3}';
    const portifolioQuery =
      '*[_type == "portifolio"]{title, subTitle, posts[]{title, description, images}}';
    const servicesQuery =
      '*[_type == "services"]{title, subTitle, info1, description1, info2, description2, info3, description3, image}';
    const whatsappQuery =
      '*[_type == "whatsapp"]{name, statusMessage, message, phone}';
    const contactQuery = '*[_type == "contact"]{title, subTitle}';

    const [
      principalData,
      aboutData,
      insertsData,
      portifolioData,
      servicesData,
      whatsappData,
      contactData,
    ] = await Promise.all([
      client.fetch(principalQuery),
      client.fetch(aboutQuery),
      client.fetch(insertsQuery),
      client.fetch(portifolioQuery),
      client.fetch(servicesQuery),
      client.fetch(whatsappQuery),
      client.fetch(contactQuery),
    ]);

    const principalResultsWithUrls = {
      logo: principalData[0]?.logo ? urlFor(principalData[0].logo).url() : null,
      title: principalData[0]?.title || "",
      subTitle: principalData[0]?.subTitle || "",
      image1: principalData[0]?.image1
        ? urlFor(principalData[0].image1).url()
        : null,
      image2: principalData[0]?.image2
        ? urlFor(principalData[0].image2).url()
        : null,
      image3: principalData[0]?.image3
        ? urlFor(principalData[0].image3).url()
        : null,
      image4: principalData[0]?.image4
        ? urlFor(principalData[0].image4).url()
        : null,
      image5: principalData[0]?.image5
        ? urlFor(principalData[0].image5).url()
        : null,
    };

    const insertsResultsWithUrls = {
      title: insertsData[0]?.title || "",
      subTitle: insertsData[0]?.subTitle || "",
      insertTitle1: insertsData[0]?.insertTitle1 || "",
      insertSubTitle1: insertsData[0]?.insertSubTitle1 || "",
      insertImage1: insertsData[0]?.insertImage1
        ? urlFor(insertsData[0].insertImage1).url()
        : null,
      insertTitle2: insertsData[0]?.insertTitle2 || "",
      insertSubTitle2: insertsData[0]?.insertSubTitle2 || "",
      insertImage2: insertsData[0]?.insertImage2
        ? urlFor(insertsData[0].insertImage2).url()
        : null,
      insertTitle3: insertsData[0]?.insertTitle3 || "",
      insertSubTitle3: insertsData[0]?.insertSubTitle3 || "",
      insertImagem3: insertsData[0]?.insertImagem3
        ? urlFor(insertsData[0].insertImagem3).url()
        : null,
    };

    const portifolioResultsWithUrls = {
      title: portifolioData[0]?.title || "",
      subTitle: portifolioData[0]?.subTitle || "",
      posts: (portifolioData[0]?.posts || []).map((post: any) => ({
        title: post.title || "",
        description: post.description || "",
        images: (post.images || []).map((img: any) => {
          return img && img.asset ? urlFor(img).url() : null;
        }),
      })),
    };

    const servicesResultsWithUrls = {
      title: servicesData[0]?.title || "",
      subTitle: servicesData[0]?.subTitle || "",
      info1: servicesData[0]?.info1 || "",
      description1: servicesData[0]?.description1 || "",
      info2: servicesData[0]?.info2 || "",
      description2: servicesData[0]?.description2 || "",
      info3: servicesData[0]?.info3 || "",
      description3: servicesData[0]?.description3 || "",
      image: servicesData[0]?.image
        ? urlFor(servicesData[0].image).url()
        : null,
    };

    const whatsappResults = {
      name: whatsappData[0]?.name || "",
      statusMessage: whatsappData[0]?.statusMessage || "",
      message: whatsappData[0]?.message || "",
      phone: whatsappData[0]?.phone || "",
    };

    const contactResults = {
      title: contactData[0]?.title || "",
      subTitle: contactData[0]?.subTitle || "",
    };

    const combinedData = {
      principal: principalResultsWithUrls,
      about: aboutData[0] || {},
      inserts: insertsResultsWithUrls,
      portfolio: portifolioResultsWithUrls,
      services: servicesResultsWithUrls,
      whatsapp: whatsappResults,
      contact: contactResults,
    };

    res.json(combinedData);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred");
    }
  }
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: `onboarding@resend.dev`,
    to: [process.env.RESEND_TO_EMAIL as string],
    subject: "Mensagem via web site",
    text: `Nome: ${name}\nMensagem: ${message}\nEmail: ${email}`,
  });

  if (error) {
    return console.error({ error });
  }

  res.json({
    message: "ok",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
