import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { paginaAdmin } from "../../routes/coordinator";
import { aprovarCandidato } from "../../services/requests";
import { ContainerGeral, HeaderDetail, CardCandidato, ListaCandidatos, TituloHeader, TituloBody, ListaAprovados } from "./styledDetails";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export default function TripDetailsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [detailsData, getData] = useRequestData(`trip/${params.idTrip}`, {})

    useProtectedPage()

    const decideAprovacao = (candidateId, decisao) => {

        aprovarCandidato(params.idTrip, candidateId, decisao, getData)
    }

    const candidatosLista = detailsData.trip && detailsData.trip.candidates?.map((candidate) => {
        return (
            <CardCandidato key={candidate.id}>
                <h3><b>{candidate.name}</b> </h3>
                <p><b>Profissão :</b> {candidate.profession} </p>
                <p><b>Idade:</b> {candidate.age} anos </p>
                <p><b>País:</b> {candidate.country}  </p>
                <p><b>Texto de Candidatura:</b> {candidate.applicationText} </p>

                <Stack direction="row" spacing={2}>
                    <Button size="small" variant="contained" color="success" onClick={() => decideAprovacao(candidate.id, true)}>Aprovar</Button>
                    <Button size="small" variant="contained" color="error" onClick={() => decideAprovacao(candidate.id, false)}>Reprovar</Button>
                </Stack>

            </CardCandidato>
        )
    })

    const aprovadosLista = detailsData.trip && detailsData.trip.approved.map((pariticpant) => {
        return <ListaAprovados>
            <li key={pariticpant.id}>{pariticpant.name}</li>
        </ListaAprovados>
    })

    return (
        <ContainerGeral>
            <HeaderDetail>

                <TituloHeader>Viagem: {detailsData.trip && detailsData.trip.name} </TituloHeader>
                <Button color="secondary" onClick={() => { paginaAdmin(navigate) }}> Fechar detalhes</Button>

            </HeaderDetail>


            <TituloBody>Candidatos</TituloBody>
            <ListaCandidatos>
                {candidatosLista}
            </ListaCandidatos>

            <TituloBody>Aprovados</TituloBody>
            {aprovadosLista}

        </ContainerGeral>
    );
}

