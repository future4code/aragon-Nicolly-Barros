import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { toGoFeed, toGoRegister } from "../routes/coordinator";
import { postLogin } from "../services/requests";

export default function Login() {
    const navigate = useNavigate()

    const {form, onChange, clear} = useForm({ email: "", password: "" })

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

    return(
        <>
            <Header 
                page={"login"}
            />

            <hr/>

            <h2>Faça seu login aqui</h2>
            <form onSubmit={login}>
                    <label htmlFor={"email"}>Email: </label>
                    <input
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                    ></input>
                    <br />
                    <label htmlFor={"password"}>Senha: </label>
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

            <hr/>
            
            <h2>Não possui cadastro? clique abaixo</h2>
            <button onClick={()=> toGoRegister(navigate)}>Se cadastre</button>
        </>
    )
}