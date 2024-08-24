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
    const query =
      '*[_type == "tgpfixacao"]{logo, title, subTitle, image1, image2, image3, image4, image5}';
    const data = await client.fetch(query);

    // Adicionar URLs das imagens aos resultados
    const resultsWithUrls = data.map((item: any) => {
      return {
        ...item,
        logo: item.logo ? urlFor(item.logo).url() : null,
        image1: item.image1 ? urlFor(item.image1).url() : null,
        image2: item.image2 ? urlFor(item.image2).url() : null,
        image3: item.image3 ? urlFor(item.image3).url() : null,
        image4: item.image4 ? urlFor(item.image4).url() : null,
        image5: item.image5 ? urlFor(item.image5).url() : null,
      };
    });

    res.json(resultsWithUrls);
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

  console.log({ data });

  res.json({
    message: "ok",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
