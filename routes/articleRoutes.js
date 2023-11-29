const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/", articleController.get_articles);
router.get("/new-article", articleController.get_new_article);
router.post("/new-article", articleController.create_article);
router.get("/article/:id", articleController.get_article);
router.get("/article/edit-article/:id", articleController.get_edit_article);
module.exports = router;
