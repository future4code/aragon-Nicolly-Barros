import { useNavigate } from "react-router-dom";
import { goToDiaDeSorte, goToLotofacil, goToLotomania, goToQuina, goToTimemania } from "../routes/coordinator"

export default function Header() {
    const navigate = useNavigate()

    return (
        <header>
            <select>
                <option>MEGA-SENA</option>
                <option onClick={() => goToQuina(navigate)}>QUINA</option>
                <option onClick={() => goToLotofacil(navigate)}>LOTOFACIL</option>
                <option onClick={() => goToLotomania(navigate)}>LOTOMANIA</option>
                <option onClick={() => goToTimemania(navigate)}>TIMEMANIA</option>
                <option onClick={() => goToDiaDeSorte(navigate)}>DIA DE SORTE</option>
            </select>
        </header>
    )
}