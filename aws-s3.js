require("dotenv/config");

const express = require("express");
const multer = require("multer");
const AWS = require("aws-sdk");
const uuid = require("uuid/v4");

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
