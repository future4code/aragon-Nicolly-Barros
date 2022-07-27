import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { User } from "../models/User"

export const registerUser = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { email, password } = req.body

    if (!email || !password) {
      errorCode = 422
      throw new Error("Parâmetros ausentes.");
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("Parâmetro 'email' deve ser uma string.");
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("Email inválido.");
    }

    if (typeof password !== "string") {
      errorCode = 422
      throw new Error("Parâmetro 'password' deve ser uma string.");
    }

    const emailExists = await connection(TABLE_USERS)
      .select()
      .where("email", "=", `${email}`)

    if (emailExists[0]) {
      errorCode = 422
      throw new Error("Email já cadastrado.")
    }

    if (password.length < 6) {
      errorCode = 422
      throw new Error("Senha precisa ter no mínimo 6 caracteres.")
    }

    const newUser: User = {
      id: Date.now().toString(),
      email: email,
      password: password
    }

    await connection(TABLE_USERS)
      .insert({
        id: newUser.id,
        email: newUser.email,
        password: newUser.password
      })

    res.status(201).send({ message: "Usuário(a) cadastrado(a) com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}