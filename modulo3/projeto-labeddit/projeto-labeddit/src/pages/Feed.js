import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { toGoLogin } from "../routes/coordinator";

export default function Feed() {
    const navigate = useNavigate()

    useEffect(()=> {
        const token = window.localStorage.getItem("token-labeddit")
        if(!token){
            toGoLogin(navigate)
        }
    }, [])


    return (
        <>
            <Header 
                page={"feed"}
            />

            <hr/>
            <h2>Criar novo post</h2>

            <hr/>
            <h2>Lista de posts</h2>
        </>
    )
}