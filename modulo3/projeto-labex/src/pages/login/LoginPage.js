import { paginaAdmin } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom"
import { loginAdm } from "../../services/requests";
import { useState } from "react";
import { ContainerLogin, Formulario, DadosContainer, TituloLogin } from "./styledLogin";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
        <ContainerLogin>
            <DadosContainer>
                <TituloLogin>Faça seu login aqui</TituloLogin>
                <Formulario onSubmit={login}>

                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        value={inputEmail}
                        onChange={handleEmail}
                        type="text"
                        color="secondary"
                    />

                    <TextField
                        id="senha"
                        label="Senha"
                        variant="outlined"
                        value={inputSenha}
                        onChange={handleSenha}
                        type="password"
                        color="secondary"
                    />

                    <br />

                    <Button color="secondary" type="submit">Entrar</Button>

                </Formulario>
            </DadosContainer>
        </ContainerLogin>
    );
}