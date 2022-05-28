import { useNavigate } from "react-router-dom";
import { paginaDetalhes } from "../../routes/coordinator";
import { Card, NomeViagem } from "./styledCard";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ViagemCard(props) {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const { id, name, description, planet, durationInDays, date } = props.viagem;

    return (
        <Card >
            <NomeViagem>{name}</NomeViagem>
            <p>⭐ : {description}</p>
            <p>🪐 : {planet}</p>
            <p>🕗 : {durationInDays} dias</p>
            <p>📅 : {date}</p>

            {token &&
                <>
                    <br />
                    <Stack direction="row" spacing={2}>

                        <Button color="error" variant="outlined" onClick={() => props.removerViagem(id)}>🗑️</Button>
                        <Button color="secondary" variant="outlined" onClick={() => { paginaDetalhes(navigate, id) }}>Ver detalhes</Button>

                    </Stack>

                </>
            }

        </Card>
    );

}


