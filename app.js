const express = require("express");
require("dotenv").config();
require("./config/mongoose");
const app = express();

const port = process.env.PORT;
app.listen(port, () => console.log("Server started at port 3000"));
