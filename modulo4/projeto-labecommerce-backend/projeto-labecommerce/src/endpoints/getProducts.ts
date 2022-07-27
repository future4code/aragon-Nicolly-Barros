import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const getProducts = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search

    if (search) {
      const result = await connection(TABLE_PRODUCTS)
        .select("*")
        .where("name", "LIKE", `%${search}%`)

      res.status(200).send({ produtos: result })
    }

    const result = await connection(TABLE_PRODUCTS)
      .select("*")

    res.status(200).send({ produtos: result })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}