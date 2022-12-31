import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

import { config } from "dotenv";
config();

import News from "./models/News";

const PORT = process.env.PORT || 6000;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/news", async (req: Request, res: Response) => {
  // console.log(req.body);
  const newNews = new News({
    title: req.body.title,
  });
  const createdNews = await newNews.save();
  res.json(createdNews);
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI!).then(() => {
  console.log(`Listening on the port ${PORT}.`);
  app.listen(PORT);
});
