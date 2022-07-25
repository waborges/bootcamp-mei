const express = require("express");
let products = require("../products");

const routes = express.Router();

routes.post("/all", (req, res) => {
  const product = req.body;

  if (!product) {
    return res.status(400).send("Add 4 the product correctly!");
  }

  const AddProduct = [...products, ...product];
  products = AddProduct;
  res.status(201).json(products);
});

routes.post("/", (req, res) => {
    const content = req.body;

    if (!content) {
        return res.status(400).send("Add the product correctly!");
    }

    product = [...products, content]

    res.status(200).json(product);
})

routes.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const content = req.body;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(400).json({ message: "Product not found" });
  }

  const newProducts = products.map((product) => {
    if (product && product.id === id) return (product = content);
    return product;
  });

  return res.status(200).json(newProducts);
});

routes.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!id) {
    return res.status(400).json({ message: "Incorrect ID"});
  }

  const product = products.filter((item) => item.id != id);

  return res.status(200).json(product);
});

routes.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products.find((item) => item.id === id);

    res.status(200).json(product);
});

routes.get("/", (_req, res) => {
  res.status(200).json(products);
});

module.exports = routes;
