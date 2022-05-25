import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage";
import { paginaHome } from "../routes/coordinator";
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

    /* Requisição de fazer login, vem da pasta services a logica da requisoção, aqui eu so passo os argumentos*/


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
                    <form onSubmit={login}>
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

                        <button type="submit">Entrar</button>
                    </form>
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