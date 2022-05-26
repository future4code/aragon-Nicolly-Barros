import { useNavigate } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage";
import { paginaHome, paginaLogin } from "../routes/coordinator";



export default function Header(props) {
    const navigate = useNavigate()

    /* Requisição de fazer login, vem da pasta services a logica da requisoção, aqui eu so passo os argumentos*/

    const sair = () => {
        localStorage.removeItem("token");
        paginaHome(navigate)
    }

    const rederizaPagina = () => {
        switch (props.paginaAtual) {
            case "home":
                return (
                    <div>
                        <p onClick={()=> paginaLogin(navigate)}>Administrador? Faça seu login aqui</p>
                    </div>
                    
                )
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