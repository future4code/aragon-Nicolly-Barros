import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const registerProduct = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, price } = req.body

    if (!name || !price) {
      errorCode = 422
      throw new Error("Parâmetros ausentes.");
    }

    if (typeof name !== "string") {
      errorCode = 422
      throw new Error("Parâmetro 'name' deve ser uma string.");
    }

    if (typeof price !== "number") {
      errorCode = 422
      throw new Error("Parâmetro 'price' deve ser um number.");
    }

    if (price <= 0) {
      errorCode = 422
      throw new Error("Parâmetro 'price' deve ser maior que 0.");
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: name,
      price: price
    }

    await connection(TABLE_PRODUCTS)
      .insert({
        id: newProduct.id,
        name: newProduct.name,
        price: newProduct.price
      })

    res.status(200).send({
      message: "Produto cadastrado com sucesso!",
      newProduct: newProduct
    })

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}