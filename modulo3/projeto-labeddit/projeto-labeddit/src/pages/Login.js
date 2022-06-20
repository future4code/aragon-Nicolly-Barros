import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { toGoFeed, toGoRegister } from "../routes/coordinator";
import { postLogin } from "../services/requests";
import styled from "styled-components"

const SectionLogin = styled.section` 
    border: 2px solid #EC994B;
    border-radius: 5px;
    padding: 15px;
    width: 40vw;
    margin-top: 10vh;
    font-size: 3vh;
    text-align: center;
    background-color:white;
`

const Main = styled.div` 
    display:grid;
    justify-items:center;
`
const Container = styled.div` 
    background: linear-gradient(to bottom, #EC994B, #EC994B, #73777B, #15133C);
    height:100vh;
`

const Titulo = styled.h2` 
    color: #EC994B;
    font-size: 40px;
`

const Texto1 = styled.h6`
    color: #15133C;
    font-size: 20px;
    margin-top:0;
`
const Label = styled.label` 
    color: #EC994B;
`

const Texto2 = styled.h6`
    color: #15133C;
    cursor: pointer;
`

const Input = styled.input`
    border-radius: 3px;
    padding: 3px;
    margin-top: 10px;
    border: 1px solid #EC994B;

`

const Botao = styled.button` 
    margin-top: 20px;
    width: 140px;
    height: 40px;
    color: #15133C;
    font-size: 17px;
    background-color: #EC994B;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #15133C;
        color: #EC994B;
    }

`

export default function Login() {
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({ email: "", password: "" })

    const login = (e) => {
        e.preventDefault()

        postLogin(form, clear, navigate)
    }

    useEffect(() => {
        const token = localStorage.getItem("token-labeddit");
        if (token) {
            toGoFeed(navigate)
        };
    });

    return (
        <Container>
            <Header
                page={"login"}
            />

            <Main>
                <SectionLogin>
                    <Titulo>Bem vindo(a)</Titulo>
                    <Texto1>Faça seu login para entrar</Texto1>
                    <form onSubmit={login}>
                        <Label htmlFor={"email"}>Email: </Label>
                        <Input
                            id={"email"}
                            type={"email"}
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            required
                        ></Input>
                        <br />
                        <Label htmlFor={"password"}>Senha: </Label>
                        <Input
                            id={"password"}
                            type={"password"}
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            required
                        ></Input>
                        <br />
                        <Botao type={"submit"}>Entrar</Botao>
                    </form>

                    <Texto2 onClick={() => toGoRegister(navigate)}>Não possui cadastro? Inscreva-se</Texto2>
                </SectionLogin>
            </Main>
        </Container>
    )
}