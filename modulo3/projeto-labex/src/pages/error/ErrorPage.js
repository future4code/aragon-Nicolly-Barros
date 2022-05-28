import { paginaHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom"
import { TituloError, ContainerError, BotaoError } from "./styledError";

export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <ContainerError>
            <TituloError>Erro: Página não encontrada</TituloError>
            <BotaoError onClick={()=> paginaHome(navigate)}>Voltar para página Inicial</BotaoError>
        </ContainerError>
    );
}
