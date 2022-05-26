import axios from "axios"
import { useEffect, useState } from "react"
import { AUTH, URL } from "../constants/urls"

/* Custom hook, como essa requisição get precisa ser feita tanto na pagina home (visão cliente), quanto na
pagina Adm, é mais interessante deixar ela generalizada e apenas passar os argumentos. */


export const useRequestData = (path, inicialState)=>{
    const [data, setData] = useState(inicialState)

    const getData = ()=>{
        const header = {
            headers:{
                auth: localStorage.getItem("token")
            }
        }

        axios.get(`${URL}/${AUTH}/${path}`, header)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
            alert("Erro na requisição.")
        })
    }

    useEffect(()=>{
        getData()
    }, [path])

    return[data, getData]
}