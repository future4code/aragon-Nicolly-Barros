import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users } from './data'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor rodando na portaria 3003.")
})

//Exercício 1 - arquivo externo

//Exercício 2
app.get('/usuarios', (req: Request, res: Response) => {
    try {
        const busca = req.query.busca

        if (!busca) {
            res.status(200).send({
                busca: busca,
                usuarios: users
            })
        }

        if (busca !== "NORMAL" && busca !== "ADMIN") {
            res.statusCode = 422
            throw new Error("Erro: Tipo de conta deve ser 'NORMAL' ou 'ADMIN'.");
        }

        if (busca === "NORMAL") {
            const resultado = users.filter((user) => {
                return user.role === "NORMAL"
            })

            return res.status(200).send({
                busca: busca,
                Usuários: resultado
            })
        } else {
            const resultado = users.filter((user) => {
                return user.role === "ADMIN"
            })

            return res.status(200).send({
                busca: busca,
                Usuários: resultado
            })
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Exercício 3 
app.post('/usuarios', (req: Request, res: Response) => {
    try {
        const { name, email, role, age } = req.body
        const index = users.findIndex(val => val.email === email)

        if (!name || !email || !role || !age) {
            res.statusCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof name !== "string" || typeof email !== "string") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'name' e 'email' devem ser string.");
        }

        if (typeof age !== "number") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'age' deve ser number.");
        }

        if (role !== "ADMIN" && role !== "NORMAL") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'role' deve ser 'ADMIN' ou 'NORMAL'.");
        }

        if (index < 0) {
            const novoUsuario: User = {
                id: Date.now(),
                name: name,
                email: email,
                role: role,
                age: age
            }

            users.push(novoUsuario)

            return res.status(201).send({
                mensagem: "Usuário criado com sucesso!",
                usuarios: users
            })

        } else {
            res.statusCode = 409
            throw new Error("Erro: email de usuário já existente.");
        }


    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Exercício 4
app.put('/usuarios/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { email } = req.body
        const indexId = users.findIndex(val => val.id === id)
        const indexEmail = users.findIndex(val => val.email === email)

        if (!id || !email) {
            res.statusCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof email !== "string") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'email' deve ser string.");
        }

        if (indexId < 0) {
            res.statusCode = 422
            throw new Error("Erro: id de usuário não existente.");
        }

        if (indexEmail < 0) {
            const resultado = users.map((user) => {
                if (user.id === id) {
                    user.email = email
                }

                return user
            }).filter((item) => {
                return item.id === id
            })

            res.status(201).send({
                mensagem: "Email alterado com sucesso!",
                usuario: resultado
            })
        } else {
            res.statusCode = 409
            throw new Error("Erro: email de usuário já existe.");
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Exercício 5
app.delete('/usuarios/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const indexId = users.findIndex(val => val.id === id)

        if(indexId < 0){
            res.statusCode = 422
            throw new Error("Erro: id de usuário não existente.");
        }else {
            users.splice(indexId, 1)

            res.status(201).send({
                mensagem: "Usuário deletado com sucesso!",
            })
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
})