import { Request, Response } from "express"
import connection from "../database/connection"

export const deleteToDo = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId

        const [verificationTask] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId};
        `)
        const idTaskFound = verificationTask[0]

        if (!idTaskFound) {
            errorCode = 422
            throw new Error("Erro: tarefa não encontrada.");
        }

        await connection.raw(`
        DELETE FROM Tasks
        WHERE id = "${taskId}";
        `)

        await connection.raw(`
        DELETE FROM Responsibles
        WHERE taskId = "${taskId}";
        `)

        res.status(200).send({mensagem: "Tarefa deletada com sucesso!"})

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}