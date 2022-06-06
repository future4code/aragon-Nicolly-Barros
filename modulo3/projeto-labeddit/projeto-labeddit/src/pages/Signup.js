import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { toGoFeed, toGoLogin } from "../routes/coordinator";
import { postSignup } from "../services/requests";

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
        <>
            <Header
                page={"signup"} />
            <hr />
            <h2>Criar novo usuário</h2>
            <form onSubmit={register}>
                <label htmlFor={"name"}> Nome: </label>
                <input
                    id={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <br />
                <label htmlFor={"email"}> E-mail: </label>
                <input
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <br />
                <label htmlFor={"password"}> Senha: </label>
                <input
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
                <button type={"submit"}>Cadastrar usuário</button>
            </form>
            <button onClick={() => toGoLogin(navigate)}>Voltar</button>
        </>
    )
}