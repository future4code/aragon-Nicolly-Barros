import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume";

export const addPerfume = async (req: Request, res: Response) => {
    let errorCode = 400

    try {

        const { name, brand, price, ml } = req.body

        if (!name || !brand || !price || !ml) {
            errorCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof name !== "string") {
            errorCode = 422
            throw new Error("Parâmetro 'name' deve ser uma string.");
        }

        if (typeof brand !== "string") {
            errorCode = 422
            throw new Error("Parâmetro 'brand' deve ser uma string.");
        }

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser um number.");
        }

        if (typeof ml !== "number") {
            errorCode = 422
            throw new Error("Parâmetro 'ml' deve ser um number.");
        }

        if (price <= 0 || ml <= 0) {
            errorCode = 422
            throw new Error("Parâmetros 'price' e 'ml' devem ser maior que zero.");
        }

        const newPerfume: Perfume = {
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price: price,
            ml: ml
        }

        await connection(TABLE_PERFUMES)
            .insert({
                id: newPerfume.id,
                name: newPerfume.name,
                brand: newPerfume.brand,
                price: newPerfume.price,
                ml: newPerfume.ml
            })

        res.status(201).send({
            mensagem: "Perfume adicionado com sucesso!",
            novoProduto: newPerfume
        })

    } catch (error) {
        res.status(errorCode).send({ error: error.message })
    }
}