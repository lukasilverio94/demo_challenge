const Article = require("../models/articleModel");

//Render All articles
const get_articles = async (req, res) => {
  const articles = await Article.find();
  res.render("index", { articles });
};

//GET New Article (Show at articlePage)
const get_new_article = async (req, res) => {
  try {
    const articles = await Article.find();
    res.render("newArticle", { err: articles.errors });
  } catch (err) {
    console.log(err);
  }
};

//POST New Article
const create_article = async (req, res) => {
  try {
    const newArticle = await new Article({
      title: req.body.title,
      article: req.body.article,
    });
    await newArticle.save();
    res.redirect("/");
  } catch (err) {
    res.render("newArticle", { err: err.errors });
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

// Update Article
const update_article = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByIdAndUpdate(id, req.body);
    res.status(302).redirect("/");
  } catch (err) {
    console.log(err);
    res.status(404).send("PAGE NOT FOUND");
  }
};

const delete_article = async (req, res) => {
  const { id } = req.params;
  await Article.findByIdAndDelete(id);
  res.redirect("/");
};

module.exports = {
  get_articles,
  get_new_article,
  create_article,
  get_article,
  get_edit_article,
  update_article,
  delete_article,
};
