import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

//Base url: http://localhost:3003

//Exercício 1

app.get('/', (req: Request, res: Response) => {
    res.send("Servidor funcionando!")
})

//Exercício 2

type Usuario = {
    id: number,
    name: string,
    phone: number,
    email: string
}

let listaUsuarios: Usuario[] = [
    {
        id: 1,
        name: "Nicoly Barros",
        phone: 14991971202,
        email: "nicoly@labenu.com"
    },
    {
        id: 2,
        name: "Isa Daru",
        phone: 11988723992,
        email: "isa@labenu.com"
    },
    {
        id: 3,
        name: "Criz Silva",
        phone: 13987664532,
        email: "criz@labenu.com"
    },
]

//Exercício 3

app.get('/usuarios', (req: Request, res: Response) => {
    res.status(200).send(listaUsuarios)
})

//Exercício 4

app.get('/usuarios/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const usuario = listaUsuarios.filter(usuario => usuario.id === id)
    res.status(200).send(usuario)
})

//Exercício 5

app.put('/usuario/:id', (req: Request, res: Response) => {
    const id:number = Number(req.params.id)
    const { phone } = req.body
    let usuarioAlterado:Usuario[] = []

    listaUsuarios.map((usuario) => {
        
        if(usuario.id === id){
            usuario.phone = phone
            usuarioAlterado.push(usuario)
        }
    })

    res.status(200).send(["Usuário alterado com sucesso!", usuarioAlterado])
})

//Exercício 6

app.delete('/usuario/:id', (req: Request, res: Response) => {
    const id:number = Number(req.params.id)
    const index:number = listaUsuarios.findIndex(usuario => usuario.id === id)
    listaUsuarios.splice(index, 1)

    res.status(200).send(listaUsuarios)
})


app.listen(3003, () => console.log("Servidor rodando na porta 3003!"))