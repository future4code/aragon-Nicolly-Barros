import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"

export const searchPurchase = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const user_id = req.params.user_id

    if (!user_id) {
      errorCode = 422
      throw new Error("Parâmetros ausentes.");
    }

    const userExists = await connection(TABLE_USERS)
      .select("*")
      .where("id", "=", `${user_id}`)

    if (userExists.length === 0) {
      errorCode = 409
      throw new Error("Usuário(a) não cadastrado(a).");
    }

    const purchasesExists = await connection(TABLE_PURCHASES)
      .select("*")
      .where("user_id", "=", `${user_id}`)

    if (purchasesExists.length === 0) {
      errorCode = 409
      throw new Error("Usuário(a) não possui compras.");
    }

    res.status(200).send({ compras: purchasesExists })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}