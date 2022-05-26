import { paginaAdmin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom"
import { loginAdm } from "../services/requests";
import { useState } from "react";

export default function LoginPage() {
    const [inputEmail, setInputEmail] = useState("")
    const [inputSenha, setInputSenha] = useState("")
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handleSenha = (e) => {
        setInputSenha(e.target.value)
    }

    const login = (e) => {
        e.preventDefault()

        loginAdm(inputEmail, inputSenha, navigate)
    }

    return (
        <div>
            <h1>Faça seu login aqui</h1>
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
        </div>
    );
}