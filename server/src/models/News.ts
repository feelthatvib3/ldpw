import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: String,
  text: String,
});

const NewsModel = mongoose.model("News", NewsSchema);

export default NewsModel;
