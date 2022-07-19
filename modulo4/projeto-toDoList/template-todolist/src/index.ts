import express, { application } from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { searchUser } from "./endpoints/searchUser";
import { searchToDo } from "./endpoints/searchToDo";
import { userResponsible } from "./endpoints/userResponsible";
import { userResponsibleAdd } from "./endpoints/userResponsibleAdd";
import { editNickname } from "./endpoints/editNickname";
import { editToDo } from "./endpoints/editToDo";
import { deleteToDo } from "./endpoints/deleteToDo";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Endpoint para buscar usuário
app.get("/users", searchUser)

//Endpoint para buscar tarefa
app.get("/tasks", searchToDo)

//Endpoint para pegar usuário responsável por uma tarefa
app.get("/tasks/:taskId/users", userResponsible)

//Endpoint que adiciona nova tarefa
app.post("/tasks/:taskId/users", userResponsibleAdd)

//Endpoint que edita apelido de usuário
app.put("/users/:userId", editNickname)

//Endpoit que edita status de uma tarefa
app.put("/tasks/:taskId", editToDo)

//Endpoint que deleta uma tarefa
app.delete("/tasks/:taskId", deleteToDo)