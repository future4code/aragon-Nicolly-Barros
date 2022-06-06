import { useNavigate } from "react-router-dom"
import { toGoLogin } from "../routes/coordinator"

export default function Error() {
    const navigate = useNavigate()

    return(
        <>
            <h1>Erro, página não encontrada!</h1>
            <button onClick={()=> toGoLogin(navigate)}>Voltar</button>
        </>
    )
}