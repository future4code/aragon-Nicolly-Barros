import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { paginaAdmin , paginaHome} from "../routes/coordinator";


export default function TripDetailsPage() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            paginaHome(navigate)
        }
    }, [])


    return (
        <div>
            <h1>Pagina Detalhes da viagem </h1>
            <button onClick={()=>{paginaAdmin(navigate)}}>Voltar para viagens</button>
        </div>
    );
}

