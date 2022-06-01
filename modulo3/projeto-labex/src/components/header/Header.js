import { useNavigate } from "react-router-dom"
import ErrorPage from "../../pages/error/ErrorPage";
import { paginaHome, paginaLogin } from "../../routes/coordinator";
import { ContainerHeader, TituloHeader } from "./styledHeader";
import Button from '@mui/material/Button';



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
                        <Button color="secondary"
                            onClick={() => paginaLogin(navigate)}
                        >Administrador
                        </Button>
                    </div>

                )
            case "admin":
                return (
                    <Button color="secondary" onClick={sair}>Sair</Button>
                );
            default:
                return <ErrorPage />
        }
    }


    return (
        <ContainerHeader>
            <div>
                <TituloHeader>SpaceTour</TituloHeader>
            </div>
            {rederizaPagina()}
        </ContainerHeader>
    );
}