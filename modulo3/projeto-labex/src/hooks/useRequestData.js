import axios from "axios"
import { useEffect, useState } from "react"
import { AUTH, URL } from "../constants/urls"


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