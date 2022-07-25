const express = require("express");

const app = express();

const routeProducts = require("./routes/productRouter");
// const routerUsers = require("./routes/userRouter");

app.use('/products', routeProducts);
// app.use('/users', routerUsers);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
