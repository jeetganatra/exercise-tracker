const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const url = process.env.ATLAS_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB successfully connected");
});

app.listen(port, () => {
  console.log("Server is up and running at port 5000");
});
