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
`

const Texto = styled.p`
    color: #FFBC80;
`
const Label = styled.label` 
    color: #EC994B;
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
                    <Texto>Faça seu login para entrar</Texto>
                    <form onSubmit={login}>
                        <Label htmlFor={"email"}>Email: </Label>
                        <input
                            id={"email"}
                            type={"email"}
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            required
                        ></input>
                        <br />
                        <Label htmlFor={"password"}>Senha: </Label>
                        <input
                            id={"password"}
                            type={"password"}
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            required
                        ></input>
                        <br />
                        <button type={"submit"}>Entrar</button>
                    </form>

                    <h4 onClick={() => toGoRegister(navigate)}>Não possui cadastro? Inscreva-se</h4>
                </SectionLogin>
            </Main>
        </Container>
    )
}