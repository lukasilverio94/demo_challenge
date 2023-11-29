const express = require("express");
require("dotenv").config();
require("./config/mongoose");
const articleRouter = require("./routes/articleRoutes");

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", articleRouter);

app.listen(port, () => console.log("Server started at port 3000"));
