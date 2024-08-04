import express from "express";
import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "",
  useCdn: true,
  token: process.env.SANITY_TOKEN || "",
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/data", async (req, res) => {
  try {
    const query = '*[_type == "Principal"]';
    const data = await client.fetch(query);
    res.json(data);
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
