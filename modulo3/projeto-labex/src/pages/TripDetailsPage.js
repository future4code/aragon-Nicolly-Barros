import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useRequestData } from "../hooks/useRequestData";
import { paginaAdmin } from "../routes/coordinator";
import { aprovarCandidato } from "../services/requests";


export default function TripDetailsPage() {
    const navigate = useNavigate()
    const params = useParams()
    const [detailsData, getData] = useRequestData(`trip/${params.idTrip}`, {})

    useProtectedPage()

    const decideAprovacao = (candidateId, decisao)=>{

        aprovarCandidato(params.idTrip, candidateId, decisao, getData )
    }

    const candidatosLista = detailsData.trip && detailsData.trip.candidates?.map((candidate)=>{
        return (
            <div key={candidate.id}>
                <span><b>{candidate.name}</b> </span>
                <br/>
                <p><b>Profissão:</b> {candidate.profession}  </p>
                <p><b>Idade:</b> {candidate.age}  </p>
                <p><b>País:</b> {candidate.country}  </p>
                <p><b>Texto de Candidatura:</b> {candidate.applicationText} </p>
                <button onClick={()=> decideAprovacao(candidate.id, true)}>Aprovar</button>
                <button onClick={()=> decideAprovacao(candidate.id, false)}>Reprovar</button>
                <hr/>
            </div>
        )
    })

    const aprovadosLista = detailsData.trip && detailsData.trip.approved.map((pariticpant)=>{
        return <li key={pariticpant.id}>{pariticpant.name}</li>
    })

    return (
        <div>
            <h1>Pagina Detalhes da viagem </h1>
            <button onClick={()=>{paginaAdmin(navigate)}}>Fechar detalhes</button>
            <hr/>

            <h2>Lista de candidatos</h2>
            {candidatosLista}

            <h2>Lista de Aprovados</h2>
            {aprovadosLista}

        </div>
    );
}

