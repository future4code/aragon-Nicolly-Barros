import { Request, Response } from "express"
import connection from "../database/connection"

export const userResponsible = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId as string

        const [idTask] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = "${taskId}";
        `)

        const idFound = idTask[0]

        if (!idFound) {
            errorCode = 422
            throw new Error("Erro: tarefa não encontrada.");
        }

        const [result] = await connection.raw(`
        SELECT 
        Users.id,
        Users.nickname
        FROM Responsibles
        JOIN Users
        ON Responsibles.userId = Users.id
        WHERE taskId = "${taskId}";
        `)

        if(!result[0]){
            res.status(200).send({mensagem: "Tarefa ainda não tem responsável."})
        } else {
            res.status(200).send({users: result})
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}