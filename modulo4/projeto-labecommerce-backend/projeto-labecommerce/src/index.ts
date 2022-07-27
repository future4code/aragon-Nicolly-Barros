import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { registerUser } from './endpoints/registerUser'
import { getUsers } from './endpoints/getUsers'
import { registerProduct } from './endpoints/registerProduct'
import { getProducts } from './endpoints/getProducts'
import { registerPurchase } from './endpoints/registerPurchase'
import { searchPurchase } from './endpoints/searchPurchase'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

app.post("/users", registerUser)

app.get("/users", getUsers)

app.post("/products", registerProduct)

app.get("/products", getProducts)

app.post("/purchases", registerPurchase)

app.get("/users/:user_id/purchases", searchPurchase)