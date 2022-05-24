import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH, URL } from "../constants/urls";
import { paginaDetalhes } from "../routes/coordinator";

export default function ViagemCard() {
    const [viagens, setViagens] = useState([])
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(() => {
        listaViagens()
    }, [])

    useEffect(() => {
        listaViagens()
    }, [viagens])

    const listaViagens = () => {
        axios.get(`${URL}/${AUTH}/trips`)
            .then((res) => {
                setViagens(res.data.trips)
                console.log(res.data.trips)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const deletarViagem = (id) => {
        const deletar = window.confirm("Certeza que deseja deletar essa viagem?")

        if (deletar) {
            axios.delete(`${URL}/${AUTH}/trips/${id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
                .then((res) => {

                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
    }


    const mapeamentoViagens = viagens.map((viagem) => {
        return (
            <div key={viagem.id}>
                <p>Nome: {viagem.name}</p>
                <p>Descrição: {viagem.description}</p>
                <p>Planeta: {viagem.planet}</p>
                <p>Duração: {viagem.durationInDays}</p>
                <p>Data: {viagem.date}</p>

                {token &&
                    <>
                        <br />
                        <button onClick={() => { deletarViagem(viagem.id) }}>Excluir viagem</button>
                        <button onClick={() => { paginaDetalhes(navigate) }} >Ver detalhes</button>
                    </>
                }
                <hr />
            </div>
        )
    })

    return (
        <div>
            {mapeamentoViagens}
        </div>
    );
}