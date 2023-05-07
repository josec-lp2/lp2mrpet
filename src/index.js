import express from "express";
import { products } from "./data/products.js";

const server = express();

server.use(express.json());

server.use(express.static("public"));

server.get('/', function(req, res, next) {
  res.render('index');
});
server.get("/products", (req, res) => {
  res.json(products);
});


server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
