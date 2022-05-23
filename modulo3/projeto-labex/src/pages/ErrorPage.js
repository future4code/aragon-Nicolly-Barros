import { paginaHome } from "../routes/coordinator";
import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Erro: Página não encontrada.</h1>
            <button onClick={()=> paginaHome(navigate)}>Voltar para página Inicial</button>
        </div>
    );
}
