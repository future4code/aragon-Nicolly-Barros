import express, { Request, Response } from 'express'
import cors from 'cors'
import { listCustomers } from './data'
import { AccountPaid, Customers } from './types'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("O servidor esta rodando na portaria 3003.")
})

//Endpoint de criar usuário.
app.post('/users', (req: Request, res: Response) => {
    try {
        const { name, cpf, birthDate } = req.body
        const indexCpf = listCustomers.findIndex(val => val.cpf === cpf)
        const birthDateList = birthDate.split("/")
        const age = 2022 - Number(birthDateList[2])
        const nameList = name.split("")

        if (!name || !cpf || !birthDate) {
            res.statusCode = 422
            throw new Error("Erro: parâmetros ausentes.")
        }

        if (typeof name !== "string" || typeof cpf !== "string" || typeof birthDate !== "string") {
            res.statusCode = 422
            throw new Error("Erro: os parâmetros devem ser do tipo string.")
        }

        if (age < 18) {
            res.statusCode = 422
            throw new Error("Erro: usuário deve ter idade maior ou igual a 18 anos.")
        }

        if (nameList.length < 3) {
            res.statusCode = 422
            throw new Error("Erro: nome do usuário deve conter mais de 3 caracteres.")
        }

        if (indexCpf < 0) {
            const newUser: Customers = {
                id: Date.now(),
                name: name,
                cpf: cpf,
                birthDate: birthDate,
                balance: 0,
                accountPaid: []
            }

            listCustomers.push(newUser)
        } else {
            res.statusCode = 409
            throw new Error("Erro: cpf de usuário já existente.")
        }

        res.status(201).send({
            mensagem: "Usuário criado com sucesso!",
            Usuários: listCustomers
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Endpoint que retorna saldo do usuário.
app.get('/users/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const indexUser = listCustomers.findIndex(val => val.id === id)

        if (!id) {
            res.statusCode = 422
            throw new Error("Erro: id de usuário não informada.")
        }

        if (indexUser < 0) {
            res.statusCode = 422
            throw new Error("Erro: id de usuário não existe.")
        }
        const result = listCustomers.filter((user) => {
            return user.id === id
        }).map((item) => {
            return item.balance
        })

        res.status(200).send({
            usuario: id,
            saldo: `R$ ${result},00`
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Endpoint de alterar/atualizar saldo de usuário.
app.put('/users/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { balance } = req.body
        const indexUser = listCustomers.findIndex(val => val.id === id)

        if (!id || !balance) {
            res.statusCode = 422
            throw new Error("Erro: parâmetros ausentes.")
        }

        if (typeof balance !== "number") {
            res.statusCode = 422
            throw new Error("Erro: 'saldo' precisa ser do tipo number.")
        } else if (balance < 0) {
            res.statusCode = 422
            throw new Error("Erro: 'saldo' precisa ser maior que 0.")
        }

        if (indexUser < 0) {
            res.statusCode = 422
            throw new Error("Erro: id de usuário não existe.")
        } else {
            const result = listCustomers.map((user) => {
                if (user.id === id) {
                    user.balance += balance
                }

                return user
            }).filter((item) => {
                return item.id === id
            })

            res.status(200).send({
                mensagem: "Saldo atualizado com sucesso!",
                usuario: result
            })
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Endpoint de pagar conta.
app.put('/users/:id/pay', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { value, description } = req.body
        const indexUser = listCustomers.findIndex(val => val.id === id)
        const listDescripition = description.split("")

        let currentDate = new Date()
        let today = currentDateFormatted(currentDate)

        function currentDateFormatted(dataAtual: any): string {

            let dia = dataAtual.getDate().toString()
            let diaF = (dataAtual.length == 1) ? '0' + dia : dia
            let mes = (dataAtual.getMonth() + 1).toString()
            let mesF = (mes.length == 1) ? '0' + mes : mes
            let anoF = dataAtual.getFullYear();

            return `${diaF}/${mesF}/${anoF}`;
        }

        if (!id || !value || !description) {
            res.statusCode = 422
            throw new Error("Erro: parâmetros ausentes.")
        }

        if (typeof value !== "number") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'value' deve ser do tipo number.")
        }

        if (typeof description !== "string") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'description' deve ser do tipo string.")
        }

        if (value <= 0) {
            res.statusCode = 422
            throw new Error("Erro: valor da conta deve ser maior que 0.")
        }

        if (listDescripition.length < 6) {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'description' deve possuir pelo menos 6 caracteres.")
        }

        if (indexUser < 0) {
            res.statusCode = 422
            throw new Error("Erro: id de usuário não existe.")
        } else {
            const newAccount: AccountPaid = {
                value: value,
                description: description,
                date: today
            }

            const result = listCustomers.map((user) => {
                if (user.id === id) {
                    if (user.balance < value) {
                        res.statusCode = 422
                        throw new Error("Erro: valor da conta maior que saldo disponível.")
                    } else {
                        user.balance -= value
                        user.accountPaid.push(newAccount)
                    }
                }

                return user
            }).filter((item) => {
                return item.id === id
            })

            res.status(200).send({
                mensagem: "Conta paga com sucesso!",
                usuario: result
            })
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
})