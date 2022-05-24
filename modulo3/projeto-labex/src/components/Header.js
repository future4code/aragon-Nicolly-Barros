import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage";
import { paginaHome, paginaAdmin } from "../routes/coordinator";
import { URL, AUTH } from "../constants/urls";
import { loginAdm } from "../services/requests";


export default function Header(props) {
    const [inputEmail, setInputEmail] = useState("")
    const [inputSenha, setInputSenha] = useState("")
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handleSenha = (e) => {
        setInputSenha(e.target.value)
    }

    /* Requisição de fazer login */

    /* const login = () => {
        const body = {
            email: inputEmail,
            password: inputSenha
        }

        axios.post(`${URL}/${AUTH}/login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                alert("Login efetuado com sucesso, aguarde!")
                paginaAdmin(navigate)
            })
            .catch((err) => {
                console.log(err.message)
                alert("Email e/ou senha inválido, tente novamente.")
            })
    } */

    const login = (e)=>{
        e.preventDefault()

        loginAdm(inputEmail, inputSenha, navigate)
    }

    const sair = () => {
        localStorage.removeItem("token");
        paginaHome(navigate)
    }

    const rederizaPagina = () => {
        switch (props.paginaAtual) {
            case "home":
                return (
                    <main>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            id="email"
                            name="E-mail"
                            type="text"
                            value={inputEmail}
                            onChange={handleEmail}
                        />

                        <label htmlFor="senha">Senha:</label>
                        <input
                            id="senha"
                            name="Senha"
                            type="password"
                            value={inputSenha}
                            onChange={handleSenha}
                        />

                        <button onClick={login}>Entrar</button>
                    </main>
                );
            case "admin":
                return (
                    <button onClick={sair}>Sair</button>
                );
            default:
                return <ErrorPage />
        }
    }


    return (
        <header>
            <h1>LabeX</h1>
            {rederizaPagina()}
            <hr />
        </header>
    );
}