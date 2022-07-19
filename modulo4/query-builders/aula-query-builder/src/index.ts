import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getPerfumes } from "./endpoints/getPerfumes";
import { addPerfume } from "./endpoints/addPerfume";
import { editPricePerfume } from "./endpoints/editPricePerfume";
import { deletePerfume } from "./endpoints/deletePerfume";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Endpoint que pega a lista de perfumes, com ou sem filtragem enviada pelo usuário
app.get("/perfumes", getPerfumes)

//Endpoint que adiciona um novo perfume na lista de perfumes
app.post("/perfumes", addPerfume)

//Endpoit que edita o preço de um perfume existente na lista
app.put("/perfumes/:id", editPricePerfume)

//Endpoint que deleta um perfume existente na lista
app.delete("/perfumes/:id", deletePerfume)