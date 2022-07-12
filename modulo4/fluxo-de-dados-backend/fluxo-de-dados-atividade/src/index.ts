import express, { Request, Response } from 'express'
import cors from 'cors'
import { Produto, produtos } from './data'
import { send } from 'process'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor esta rodando na porta 3003.")
})

//Exercício 1
app.get('/test', (req: Request, res: Response) => {
    try {
        res.status(200).send({
            mensagem: "API está funcional."
        })
    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

//Exercício 2 - criado arquivo externo

//Exercício 3
app.get('/produtos', (req: Request, res: Response) => {
    try {
        res.status(200).send({
            mensagem: "ok",
            produtos: produtos
        })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

//Exercício 4
app.post('/produtos', (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (!name || !price) {
            res.statusCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof name !== "string") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'name' deve ser do tipo string.");
        }

        if (typeof price !== "number") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'price' deve ser do tipo number.");
        }

        if (price <= 0) {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'price' deve ser valor maior que 0.");
        }

        const novoProduto: Produto = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        produtos.push(novoProduto)

        res.status(201).send({
            mensagem: "ok",
            produtos: produtos
        })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

//Exercício 5
app.put('/produtos/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { price } = req.body

        if (!id || !price) {
            res.statusCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof price !== "number") {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'price' deve ser do tipo number.");
        }

        if (price <= 0) {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'price' deve ser valor maior que 0.");
        }

        const produtoAlterado = produtos.map((produto) => {
            if (produto.id === id) {
                produto.price = price
            }
            return produto
        }).filter((item) => {
            return item.id === id
        })

        res.status(200).send({
            mensagem: "ok",
            produto: produtoAlterado
        })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

//Exercício 6
app.delete('/produtos/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id

        if (!id) {
            res.statusCode = 422
            throw new Error("Erro: parâmetro 'id' não informado.")
        }


        const novaLista = produtos.filter((produto) => {
            return produto.id !== id
        })

        res.status(200).send({
            mensagem: "ok",
            produtos: novaLista
        })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

