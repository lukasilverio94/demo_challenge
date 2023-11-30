const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/", articleController.get_articles);
router.get("/new-article", articleController.get_new_article);
router.post("/new-article", articleController.create_article);
router.get("/article/:id", articleController.get_article);
router.get("/article/edit-article/:id", articleController.get_edit_article);
router.post("/article/update-article/:id", articleController.update_article);
router.post("/article/delete-article/:id", articleController.delete_article);
module.exports = router;
