import { useNavigate } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage";
import { paginaHome, paginaAdmin } from "../routes/coordinator";


export default function Header(props) {
    const navigate = useNavigate()

    const rederizaPagina = () =>{
        switch(props.paginaAtual){
            case "home":
                return (
                    <button onClick={()=> paginaAdmin(navigate)}>Entrar</button>
                );
            case "admin":
                return (
                    <button onClick={()=> paginaHome(navigate)}>Sair</button>
                );
            default:
                return <ErrorPage />
        }
    }

    return (
        <header>
            <h1>LabeX</h1>
            {rederizaPagina()}
        </header>
    );
}