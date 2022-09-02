import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalState";
import { goToDiaDeSorte, goToLotofacil, goToLotomania, goToMegasena, goToQuina, goToTimemania } from "../routes/coordinator"

export default function Header() {

    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    const { loterias } = context.states
    const { getLoterias, getLoteriaConcurso } = context.getters

    useEffect(() => {
        getLoterias()
        getLoteriaConcurso()
    }, [])

    const opcoesLoterias = loterias.map(loteria => {
        return (
            <option key={loteria.id} value={loteria.nome}>
                {loteria.nome}
            </option>
        );
    })

    const nomeSorteio = (e) => {
        switch (e.target.value) {
            case "mega-sena":
                return goToMegasena(navigate)
            case "quina":
                return goToQuina(navigate)
            case "lotofácil":
                return goToLotofacil(navigate)
            case "lotomania":
                return goToLotomania(navigate)
            case "timemania":
                return goToTimemania(navigate)
            case "dia de sorte":
                return goToDiaDeSorte(navigate)
            default:
                return goToMegasena(navigate)
        }
    }

    return (
        <header>
            <select name="sorteio" onChange={nomeSorteio} >
                <option value={""}>Selecione Loteria</option>
                {opcoesLoterias}
            </select>
        </header>
    )
}