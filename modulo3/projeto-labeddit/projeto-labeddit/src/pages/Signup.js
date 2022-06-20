import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { toGoFeed, toGoLogin } from "../routes/coordinator";
import { postSignup } from "../services/requests";
import styled from "styled-components"


const Container = styled.div` 
    background: linear-gradient(to bottom, #EC994B, #EC994B, #73777B, #15133C);
    height:100vh;
`
const SectionSignup = styled.section` 
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
const Titulo = styled.h2` 
    color: #15133C;
    font-size: 40px;
`

const Label = styled.label` 
    color: #EC994B;
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
    font-size: 15px;
    background-color: #EC994B;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #15133C;
        color: #EC994B;
    }

`

export default function Signup() {
    const navigate = useNavigate()

    const { form, onChange, clear } = useForm({ name: "", email: "", password: "" })


    const register = (e) => {
        e.preventDefault()

        postSignup(form, onChange, clear)
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
                page={"signup"}
            />


            <Main>
                <SectionSignup>
                    <Titulo>Criar novo usuário</Titulo>
                    <form onSubmit={register}>
                        <Label htmlFor={"name"}> Nome: </Label>
                        <Input
                            id={"name"}
                            name={"name"}
                            value={form.name}
                            onChange={onChange}
                            pattern={"^.{3,}$"}
                            title={"O nome deve ter no mínimo 3 caracteres"}
                            required
                        />
                        <br />
                        <Label htmlFor={"email"}> E-mail: </Label>
                        <Input
                            id={"email"}
                            type={"email"}
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            required
                        />
                        <br />
                        <Label htmlFor={"password"}> Senha: </Label>
                        <Input
                            id={"password"}
                            type={"password"}
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            pattern={"^.{8,30}$"}
                            title={"a senha deve ter no mínimo 8 e no máximo 30 caracteres"}
                            required
                        />
                        <br />
                        <Botao type={"submit"}>Cadastrar usuário</Botao>
                    </form>
                    <Botao onClick={() => toGoLogin(navigate)}>Voltar</Botao>
                </SectionSignup>
            </Main>
        </Container>
    )
}