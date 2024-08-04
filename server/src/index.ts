import express from "express";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "", // ID do seu projeto
  dataset: process.env.SANITY_DATASET || "", // Dataset
  useCdn: true, // `false` se você quiser conteúdo mais recente
  token: process.env.SANITY_TOKEN || "", // Token de autenticação
});

// Configurar o URL Builder
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

app.get("/data", async (req, res) => {
  try {
    const query =
      '*[_type == "tgpfixacao"]{titulo, subTitle, image1, image2, image3, image4, image5}';
    const data = await client.fetch(query);

    // Adicionar URLs das imagens aos resultados
    const resultsWithUrls = data.map((item: any) => {
      return {
        ...item,
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
