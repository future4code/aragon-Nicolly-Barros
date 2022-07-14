import { Request, Response } from "express"
import connection from "../database/connection"

export const editNickname = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.params.userId
        const nickname = req.body.nickname

        if (!nickname) {
            errorCode = 422
            throw new Error("Erro: parâmetro ausente.");
        }

        if (typeof nickname !== "string") {
            errorCode = 422
            throw new Error("Erro: parâmetro deve ser do tipo string.");
        }

        if (nickname.length < 3){
            errorCode = 422
            throw new Error("Erro: parâmetro deve conter pelo menos 3 caracteres.");
        }

        const [verificationUser] = await connection.raw(`
        SELECT * FROM Users
        WHERE id = ${userId};
        `)
        const idUserFound = verificationUser[0]

        if (!idUserFound) {
            errorCode = 422
            throw new Error("Erro: usuário(a) não encontrado(a).");
        }

        await connection.raw(`
        UPDATE Users
        SET nickname = "${nickname}"
        WHERE id = ${userId}
        `)

        res.status(200).send({mensagem: "Apelido alterado com sucesso!"})
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}