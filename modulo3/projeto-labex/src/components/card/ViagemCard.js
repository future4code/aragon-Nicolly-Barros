import { useNavigate } from "react-router-dom";
import { paginaDetalhes } from "../../routes/coordinator";
import { Card , NomeViagem} from "./styledCard";

export default function ViagemCard(props) {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const {id, name, description, planet, durationInDays, date} = props.viagem;

    return (
        <Card >
            <NomeViagem>{name}</NomeViagem>
            <p>Descrição: {description}</p>
            <p>Planeta: {planet}</p>
            <p>Duração: {durationInDays}</p>
            <p>Data: {date}</p>
    
            {token &&
                <>
                    <br />
                    <button onClick={() =>  props.removerViagem(id)}>Excluir viagem</button>
                    <button onClick={() => { paginaDetalhes(navigate,id) }} >Ver detalhes</button>
                </>
            }
            
        </Card>
    );

}


