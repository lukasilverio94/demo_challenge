const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title should be at least 25 characters long."],
    minLength: 25,
  },
  article: {
    type: String,
    required: [true, "Text should be at least 100 characters long."],
    minLength: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
