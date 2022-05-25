import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ViagemCard from "../components/ViagemCard";
import { paginaHome } from "../routes/coordinator";
import { URL, AUTH } from "../constants/urls";
import { useRequestData } from "../hooks/useRequestData";
import { deletarViagem } from "../services/requests";

export default function AdminPage() {
    const [nomeViagem, setNomeViagem] = useState("")
    const [planeta, setPlaneta] = useState([])
    const [lancamento, setLancamento] = useState("")
    const [descricao, setDescricao] = useState("")
    const [duracao, setDuracao] = useState("")

    const [viagens, getData] = useRequestData("trips", {})
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const handleNomeViagem = (e) => {
        setNomeViagem(e.target.value)
    }

    const handlePlaneta = (e) => {
        setPlaneta(e.target.value)
    }

    const handleLancamento = (e) => {
        setLancamento(e.target.value)
    }

    const handleDescricao = (e) => {
        setDescricao(e.target.value)
    }

    const handleDuracao = (e) => {
        setDuracao(Number(e.target.value))
    }


    useEffect(() => {
        if (!token) {
            paginaHome(navigate)
        }
    }, [])

    const removerViagem = (id)=>{
        deletarViagem(id, getData)
    }

    const listaViagens = viagens.trips ? viagens.trips.map((viagem)=>{
        return(
            <ViagemCard 
                id={viagem.id}
                viagem={viagem}
                removerViagem={removerViagem}
                
            />
        )
    }) : (
        <p>carregando...</p>
    )


    /* Requisição de criar viagem */

    const criarViagem = () => {
        const body = {
            name: nomeViagem,
            planet: planeta,
            date: lancamento,
            description: descricao,
            durationInDays: duracao,
        };

        axios.post(`${URL}/${AUTH}/trips`, body, {
            headers:{
                auth: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Viagem criada com sucesso!")
            getData()
            setDescricao("")
            setDuracao("")
            setLancamento("")
            setNomeViagem("")
            setPlaneta([""])
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }


    return (
        <div>
            <Header
                paginaAtual={"admin"}
            />

            <section>
                <h3>Criar nova viagem</h3>
    
                    <label htmlFor="nome">Nome: </label>
                    <input
                        id="nome"
                        name="Nome"
                        value={nomeViagem}
                        onChange={handleNomeViagem}
                    />

                    <label htmlFor="planeta">Planeta: </label>
                    <select
                        id="planeta"
                        name="Planeta"
                        defaultValue={""}
                        onChange={handlePlaneta}
                    >
                        <option value={""}>Escolha um planeta</option>
                        <option value={"Mércurio"}>Mércurio</option>
                        <option value={"Marte"}>Marte</option>
                        <option value={"Vênus"}>Vênus</option>
                        <option value={"Terra"}>Terra</option>
                        <option value={"Jupiter"}>Jupiter</option>
                        <option value={"Saturno"}>Saturno</option>
                        <option value={"Urano"}>Urano</option>
                        <option value={"Netuno"}>Netuno</option>
                    </select>

                    <label htmlFor="lancamento">Data de lançamento: </label>
                    <input
                        id="lancamento"
                        name="Lancamento"
                        type={"date"}
                        value={lancamento}
                        onChange={handleLancamento}
                    />

                    <label htmlFor="descricao">Descrição: </label>
                    <input
                        id="descricao"
                        name="Descricao"
                        value={descricao}
                        onChange={handleDescricao}
                    />

                    <label htmlFor="duracao">Duração: </label>
                    <input
                        id="duracao"
                        name="Duracao"
                        value={duracao}
                        onChange={handleDuracao}
                    />

                    <button onClick={criarViagem}>Criar</button>

                
            </section>

            <hr />
            <h3>Lista de viagens</h3>
            {listaViagens}
        </div>
    );
}