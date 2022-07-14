import { Request, Response } from "express"
import connection from "../database/connection"

export const userResponsibleAdd = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId
        const userId = req.body.userId

        const [verificationTask] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE id = ${taskId};
        `)
        const idTaskFound = verificationTask[0]

        if (!idTaskFound) {
            errorCode = 422
            throw new Error("Erro: tarefa não encontrada.");
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

        const [verificationToDo] = await connection.raw(`
        SELECT * FROM Responsibles
        WHERE userId = ${userId} AND taskId = ${taskId};
        `)
        const toDoFound = verificationToDo[0]

        if (toDoFound) {
            errorCode = 409
            throw new Error("Erro: usuário(a) já atribuido(a) à essa tarefa.");

        } else {
            const newToDo = {
                userId: userId,
                taskId: taskId
            }

            await connection.raw(`
            INSERT INTO Responsibles (userId, taskId)
            VALUES ("${newToDo.userId}", "${newToDo.taskId}");
            `)

            res.status(201).send({ mensagem: "Usuário(a) atribuido(a) à tarefa com sucesso!"})
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}