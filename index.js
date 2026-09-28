console.log("working");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");
const port = 3000;
app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({});

    res.status(200).json({
      message: "product retrieved",
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err || "server error",
    });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json;
    ({
      message: "Product successfully created",
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err || "Server Error",
    });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err || "server error",
    });
  }
});

mongoose
  .connect("mongodb+srv://aj:12345@cluster0.k8lywzz.mongodb.net/AppDevv")
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

// separate file mo pre para mas organize, tas mas maganda module yung type
// anong year kana pre?
