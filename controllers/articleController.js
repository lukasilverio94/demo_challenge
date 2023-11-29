const Article = require("../models/articleModel");

//Render All articles
const get_articles = async (req, res) => {
  const articles = await Article.find();
  res.render("index", { articles });
};

//GET New Article (Show at articlePage)
const get_new_article = async (req, res) => {
  const articles = await Article.find();
  res.render("newArticle", { articles });
};

//POST New Article
const create_article = async (req, res) => {
  try {
    const newArticle = await new Article({
      title: req.body.title,
      article: req.body.article,
    });
    await newArticle.save();
    console.log(newArticle);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Article Detail
const get_article = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  res.render("articleDetail", { article });
};

// Page Edit Article
const get_edit_article = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  res.render("editArticle", { article });
};

module.exports = {
  get_articles,
  get_new_article,
  create_article,
  get_article,
  get_edit_article,
};
