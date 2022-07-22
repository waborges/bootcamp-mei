const express = require("express");
let products = require("./products");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.post("/products", (req, res) => {
  const product = req.body;

  if (!product) {
    return res.status(400).send("Add the product correctly!");
  }

  const AddProduct = [...products, ...product];
  products = AddProduct;
  res.status(201).json(products);
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const content = req.body;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
  }

  const newProducts = products.map((products) => {
    if (products.id === id) return products = content;
    return products;
  });

  return res.status(200).json(newProducts);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.filter((item) => item.id != id);
  return res.status(200).json(product);
});

app.get("/products", (_req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
