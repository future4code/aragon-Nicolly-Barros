import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log('O servidor está rodando na porta 3003.')
})

//Exercicio 1
app.get('/ping', (req: Request, res: Response) => {
    return res.send("Pong!")
})


//Exercício 2 

type Tarefa = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

let afazeres: Tarefa[] = [
    {
        userId: 1,
        id: 1,
        title: "Lavar roupa",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Fazer compras",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "Estudar matéria atrasada",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Varrer a casa",
        completed: false
    },
    {
        userId: 3,
        id: 5,
        title: "Lavar louça",
        completed: false
    },
    {
        userId: 3,
        id: 6,
        title: "Passear com o cachorro",
        completed: false
    },
]

//Exercício 3
app.get('/afazeres/:userId', (req: Request, res: Response) => {
    const userId = Number(req.params.userId)

    const resultado = afazeres.filter((afazer) => {
        return afazer.userId === userId
    })
    res.send({
        usuario: userId,
        Afazeres: resultado
    })

})

//Exercício 4
app.post('/afazeres', (req: Request, res: Response) => {
    const { userId, title } = req.body
    const ultimaTarefa = afazeres[afazeres.length - 1]

    const novaTarefa: Tarefa = {
        userId: userId,
        id: ultimaTarefa.id + 1,
        title: title,
        completed: false
    }

    afazeres.push(novaTarefa)

    res.send({
        mensagem: 'Tarefa adicionada com sucesso!',
        afazeres: afazeres
    })
})

//Exercício 5
app.put('/afazeres/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { completed } = req.body

    const resultado = afazeres.map((tarefa) => {
        if (tarefa.id === id) {
            return { ...tarefa, completed: completed }
        }
    })

    res.send({
        mensagem: "Status da tarefa atualizado!",
        afazeres: resultado
    })
})

//Exercício 6
app.delete('/afazeres/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const index = afazeres.findIndex(tarefa => tarefa.id === id)

    afazeres.splice(index, 1)

    res.send({
        mensagem: "Tarefa deletada com sucesso!",
        afazeres: afazeres
    })
})


//Exercício 7
app.get('/afazeres', (req: Request, res: Response) => {
    const busca = req.query.busca

    if (busca !== "true" && busca !== "false") {
        return res.send({
            busca: busca,
            afazeres: afazeres
        })
    }

    if (busca === "true") {
        const resultado = afazeres.filter((afazer) => {
            return afazer.completed === true
        })

        return res.send({
            completa: busca,
            afazeres: resultado
        })
    } else {
        const resultado = afazeres.filter((afazer) => {
            return afazer.completed === false
        })

        return res.send({
            completa: busca,
            afazeres: resultado
        })
    }
})

