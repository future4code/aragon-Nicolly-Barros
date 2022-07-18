import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { getProducts } from "./endpoints/getProducts";
import { postProduct } from "./endpoints/postProduct";
import { deleteProduct } from "./endpoints/deleteProduct";
import { putProduct } from "./endpoints/putProduct";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Get users
app.get("/users", getUsers)

// Get products
app.get("/products", getProducts)

// Post product
app.post("/products", postProduct)

// Delete product
app.delete("/products/:id", deleteProduct)

// Put product
app.put("/products/:id", putProduct)