import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ViagemCard from "../components/ViagemCard";
import { useRequestData } from "../hooks/useRequestData";
import { paginaAdmin } from "../routes/coordinator";

export default function HomePage() {
    const navigate = useNavigate()
    const [viagens] = useRequestData("trips", {})

    useEffect(()=>{
        if(localStorage.getItem("token")){
            paginaAdmin(navigate)
        }
    }, [])

    const listaViagens = viagens.trips ? viagens.trips.map((viagem)=>{
        return(
            <ViagemCard 
                id={viagem.id}
                viagem={viagem}
            />
        )
    }) : (
        <p>carregando...</p>
    )

    return (
        <div>
            <Header
                paginaAtual={"home"}
            />
            <h3>Increva-se em uma nova viagem</h3>
            <hr />
            <h3>Lista de viagens</h3>
            {listaViagens}
        </div>
    );
}