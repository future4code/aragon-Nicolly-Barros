import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { Funcionario } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

//Endpoint que busca um determinado usuário
app.get('/funcionarios', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const busca = req.query.busca as string

    if (busca) {
      const [resultado] = await connection.raw(`
      SELECT * FROM Lista_Funcionarios
      WHERE LOWER(name) LIKE "%${busca.toLowerCase()}%";
      `)

      res.status(200).send({ funcionario: resultado })
    }

    const [resultado] = await connection.raw(`
    SELECT * FROM Lista_Funcionarios;
    `)

    res.status(200).send({ funcionarios: resultado })

  } catch (error) {
    res.status(errorCode).send({ erro: error.message })
  }
})

//Endpoint que cria um novo usuário
app.post("/funcionarios", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, email } = req.body

    if (!name || !email) {
      errorCode = 422
      throw new Error("Erro: parâmetros ausentes.");
    }

    if (typeof name !== "string" || typeof email !== "string") {
      errorCode = 422
      throw new Error("Erro: parâmetros devem ser do tipo string.");
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("Erro: email inválido.");
    }

    const [funcionarios] = await connection.raw(`
    SELECT * FROM Lista_Funcionarios
    WHERE email = "${email}";
    `)

    const funcionarioEncontrado = funcionarios[0]

    if (funcionarioEncontrado) {
      errorCode = 409
      throw new Error("Erro: email já cadastrado.");
    }

    if (name.length < 4) {
      errorCode = 422
      throw new Error("Erro: nome do(a) funcionário(a) deve conter pelo menos 4 caracteres.");
    }

    const novoFuncionario: Funcionario = {
      id: Date.now(),
      name: name,
      email: email
    }

    await connection.raw(`
    INSERT INTO Lista_Funcionarios (id, name, email)
    VALUES ("${novoFuncionario.id}", "${novoFuncionario.name}", "${novoFuncionario.email}");
    `)

    res.status(201).send({ mensagem: "Funcionário(a) cadastrado(a) com sucesso!", funcionario: novoFuncionario })

  } catch (error) {
    res.status(errorCode).send({ erro: error.message })
  }
})

//Endpoint que edita email de um usuário
app.put("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const email = req.body.email as string

    if (!email) {
      errorCode = 422
      throw new Error("Erro: parâmetro ausente.");
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("Erro: parâmetro email deve ser do tipo string.");
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("Erro: email inválido.");
    }

    const [funcionariosId] = await connection.raw(`
    SELECT * FROM Lista_Funcionarios
    WHERE id = "${id}";
    `)
    const funcionarioEncontradoId = funcionariosId[0]

    if (!funcionarioEncontradoId) {
      errorCode = 404
      throw new Error("Erro: id do(a) funcionário(a) não encontrado.");
    }

    const [funcionarios] = await connection.raw(`
    SELECT * FROM Lista_Funcionarios
    WHERE email = "${email}";
    `)
    const funcionarioEncontrado = funcionarios[0]

    if (funcionarioEncontrado) {
      errorCode = 409
      throw new Error("Erro: email já cadastrado.");
    }

    await connection.raw(` 
    UPDATE Lista_Funcionarios
    SET email = "${email}"
    WHERE id = "${id}";
    `)

    res.status(200).send({ mensagem: "Email atualizado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ erro: error.message })
  }
})

//Endpoint que deleta usuário
app.delete("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    if(!id){
      errorCode = 422
      throw new Error("Erro: parâmetro ausente.");
      
    }

    const [funcionariosId] = await connection.raw(`
    SELECT * FROM Lista_Funcionarios
    WHERE id = "${id}";
    `)
    const funcionarioEncontradoId = funcionariosId[0]

    if (!funcionarioEncontradoId) {
      errorCode = 404
      throw new Error("Erro: id do(a) funcionário(a) não encontrado.");
    }

    await connection.raw(`
    DELETE FROM Lista_Funcionarios
    WHERE id = ${id};
    `)

    res.status(200).send({mensagem: "Cadastro deletado com sucesso!"})

  } catch (error) {
    res.status(errorCode).send({ erro: error.message })
  }
})