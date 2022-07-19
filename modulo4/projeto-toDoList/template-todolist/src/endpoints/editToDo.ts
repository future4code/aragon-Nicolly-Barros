import { Request, Response } from "express"
import connection from "../database/connection"

export const editToDo = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId
        const status = req.body.status as string 

        if (!status) {
            errorCode = 422
            throw new Error("Erro: parâmetro ausente.");
        }

        if (status !== "TO_DO" && status !== "DOING" && status !== "DONE") {
            errorCode = 422
            throw new Error("Erro: parâmetro deve conter um dos seguintes valores: TO_DO, DOING ou DONE.");
        }

        const [verificationTask] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId};
        `)
        const idTaskFound = verificationTask[0]

        if (!idTaskFound) {
            errorCode = 404
            throw new Error("Erro: tarefa não encontrada.");
        }

        await connection.raw(`
        UPDATE Tasks
        SET status = "${status}"
        WHERE id = ${taskId}
        `)

        res.status(200).send({mensagem: "Status alterado com sucesso!"})

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}