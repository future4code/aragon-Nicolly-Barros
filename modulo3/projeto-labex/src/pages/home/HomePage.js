import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import ViagemCard from "../../components/card/ViagemCard";
import { paises } from "../../constants/paises";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { paginaAdmin } from "../../routes/coordinator";
import { envioCandidatura } from "../../services/requests";
import { CardsLista, TituloInscreva, ContainerHome, DivInputs} from "./styledHome";
import TextField from '@mui/material/TextField';



export default function HomePage() {
    const [idTrip, setIdTrip] = useState("")
    const [inscrever, setInscrever] = useState(false)
    const navigate = useNavigate()
    const [viagens] = useRequestData("trips", {}) //aqui utilizamos o custom hook criado na pasta hooks, passando os 2 argumentos necessaŕios.

    useEffect(() => {
        if (localStorage.getItem("token")) {
            paginaAdmin(navigate)
        }
    }, [])

    const botaoInscrever = () => {
        setInscrever(!inscrever)
        console.log(inscrever)
    }

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
        <ContainerHome>
            <Header
                paginaAtual={"home"}
            />

            <TituloInscreva>
                <p>Gostou de nossas viagens?   </p>
                <h4 onClick={botaoInscrever}> Inscreva-se</h4>
            </TituloInscreva>


            {inscrever ? (
                <DivInputs>

                    <TextField
                        id="name"
                        label="Nome"
                        variant="outlined"
                        onChange={onChange}
                        value={form.name}
                        name="name"
                        size="small"
                        color="secondary"
                    />



                    <TextField
                        id="age"
                        label="Idade"
                        variant="outlined"
                        onChange={onChange}
                        value={form.age}
                        name="age"
                        type={"number"}
                        size="small"
                        color="secondary"
                    />



                    <TextField
                        id="application-text"
                        label="Texto de Candidatura"
                        variant="outlined"
                        onChange={onChange}
                        value={form.applicationText}
                        name={"applicationText"}
                        type="text"
                        size="small"
                        color="secondary"
                    />




                    <TextField
                        id="profession"
                        label="Profissão"
                        variant="outlined"
                        onChange={onChange}
                        value={form.profession}
                        name={"profession"}
                        type="text"
                        size="small"
                        color="secondary"
                    />

                    <br />

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

                    <button onClick={onClickCandidato}>Enviar Candidatura</button>

                </DivInputs>
            ) : (
                <></>
            )}

            <CardsLista>
                {listaViagens}
            </CardsLista>
        </ContainerHome>
    );
}