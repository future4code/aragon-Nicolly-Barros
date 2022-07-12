import { Customers } from "./types";

export const listCustomers: Customers[] = [
    {
        id: 1,
        name: "Nicoly Barros",
        cpf: "1214443134",
        birthDate: "25/11/1999",
        balance: 500,
        accountPaid:[
            {
                value: 123.99,
                description: "Boleto aula de inglês.",
                date: "08/07/2022"
            },
            {
                value: 210.99,
                description: "Boleto escola de dança.",
                date: "08/07/2022"
            },
            {
                value: 100.99,
                description: "Boleto da internet.",
                date: "08/07/2022"
            },
        ]
    },
    {
        id: 2,
        name: "Isabelle Daru",
        cpf: "3847310909",
        birthDate: "10/04/1997",
        balance: 1200,
        accountPaid:[
            {
                value: 40,
                description: "Faxina.",
                date: "08/07/2022"
            },
            {
                value: 500,
                description: "Crechê das crianças.",
                date: "08/07/2022"
            },
            {
                value: 160.59,
                description: "Conta de agua.",
                date: "08/07/2022"
            },
        ]
    },
    {
        id: 3,
        name: "Cristiano Silva",
        cpf: "0908331233",
        birthDate: "03/08/1999",
        balance: 2000,
        accountPaid:[
            {
                value: 670,
                description: "Parcela da cadeira gamer.",
                date: "08/07/2022"
            },
        ]
    },
    {
        id: 4,
        name: "Marcos Paulo",
        cpf: "0977312435",
        birthDate: "31/01/1999",
        balance: 3400,
        accountPaid:[
            {
                value: 30.45,
                description: "Jogo futebol.",
                date: "08/07/2022"
            },
            {
                value: 110.99,
                description: "Boleto internet.",
                date: "08/07/2022"
            },
            {
                value: 300.99,
                description: "Boleto autoescola.",
                date: "08/07/2022"
            },
            {
                value: 160.99,
                description: "Boleto renner.",
                date: "08/07/2022"
            },
        ]
    },
    {
        id: 5,
        name: "Evelyn Neves",
        cpf: "2356585143",
        birthDate: "25/11/1999",
        balance: 2500,
        accountPaid:[
            {
                value: 100.99,
                description: "Roupas novas.",
                date: "08/07/2022"
            },
            {
                value: 510,
                description: "Boleto carro.",
                date: "08/07/2022"
            },
            {
                value: 150,
                description: "Oculos de sol.",
                date: "08/07/2022"
            },
        ]
    }
]