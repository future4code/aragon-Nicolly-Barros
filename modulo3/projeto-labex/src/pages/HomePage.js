import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ViagemCard from "../components/ViagemCard";
import { paises } from "../constants/paises";
import { useForm } from "../hooks/useForm";
import { useRequestData } from "../hooks/useRequestData";
import { paginaAdmin } from "../routes/coordinator";
import { envioCandidatura } from "../services/requests";

export default function HomePage() {
    const [idTrip, setIdTrip] = useState("")
    const navigate = useNavigate()
    const [viagens] = useRequestData("trips", {}) //aqui utilizamos o custom hook criado na pasta hooks, passando os 2 argumentos necessaŕios.

    useEffect(() => {
        if (localStorage.getItem("token")) {
            paginaAdmin(navigate)
        }
    }, [])

    const { form, onChange, clear } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const onChangeIdViagem = (e) => {
        setIdTrip(e.target.value)
    }

    const onClickCandidato = (e) => {
        e.preventDefault();

        envioCandidatura(form, idTrip, clear)
    }

    const opcoesViagens = viagens.trips && viagens.trips?.map((viagem) => {
        return <option
            key={viagem.id}
            value={viagem.id}
        >
            {viagem.name}
        </option>
    })


    const listaViagens = viagens.trips ? viagens.trips.map((viagem) => {
        return (
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

            <form onSubmit={onClickCandidato}>
                <label htmlFor="trip">Viagem: </label>
                <select
                    id="trip"
                    name="trip"
                    defaultValue={""}
                    onChange={onChangeIdViagem}
                >
                    <option value={""} disabled>Escolha uma viagem</option>
                    {opcoesViagens}

                </select>

                <label htmlFor="name">Nome: </label>
                <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                />

                <label htmlFor="age">Idade: </label>
                <input
                    id="age"
                    name="age"
                    type={"number"}
                    value={form.age}
                    onChange={onChange}
                    min={18}
                />

                <label htmlFor={"application-text"}> Texto de Candidatura: </label>
                <input
                    id={"application-text"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                />

                <label htmlFor={"profession"}> Profissão: </label>
                <input
                    id={"profession"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                />

                <label htmlFor={"country"}> País de origem: </label>
                <select
                    id={"country"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                >
                    <option value={""} disabled >Escolha um País</option>
                    {paises.map((pais) => {
                        return <option value={pais} key={pais}>{pais}</option>
                    })}
                </select>

                <button type="submit">Enviar Candidatura</button>

            </form>

            <hr />
            <h3>Lista de viagens</h3>
            {listaViagens}
        </div>
    );
}