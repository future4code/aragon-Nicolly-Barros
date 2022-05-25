import { useNavigate } from "react-router-dom";
import { paginaDetalhes } from "../routes/coordinator";

export default function ViagemCard(props) {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const {id, name, description, planet, durationInDays, date} = props.viagem;

    return (
        <div >
            <p>Nome: {name}</p>
            <p>Descrição: {description}</p>
            <p>Planeta: {planet}</p>
            <p>Duração: {durationInDays}</p>
            <p>Data: {date}</p>
    
            {token &&
                <>
                    <br />
                    <button onClick={() =>  props.removerViagem(id)}>Excluir viagem</button>
                    <button onClick={() => { paginaDetalhes(navigate) }} >Ver detalhes</button>
                </>
            }
            <hr />
        </div>
    );

}


