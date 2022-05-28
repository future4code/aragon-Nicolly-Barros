import Header from "../../components/header/Header";
import ViagemCard from "../../components/card/ViagemCard";
import { useRequestData } from "../../hooks/useRequestData";
import { criarViagem, deletarViagem } from "../../services/requests";
import { useForm } from "../../hooks/useForm";
import { planets } from "../../constants/planets";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerViagens, CardsLista, TituloCriar , ContainerCriar, Carregando} from "./styledAdmin";
import { useState } from "react";

export default function AdminPage() {

    const { form, onChange, clear } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const [viagens, getData] = useRequestData("trips", {}) //aqui utilizamos o custom hook criado na pasta hooks, passando os 2 argumentos necessaŕios.
    const [criarViagem, setCriarViagem] = useState(false)

    useProtectedPage()


    const botaoCriar = () => {
        setCriarViagem(!criarViagem)
    }



    /* Requisição de deletar viagem, Requisição de criar viagem, vem de um arquivo externo (services) e só passamos os argumentos*/

    const removerViagem = (id) => {
        deletarViagem(id, getData)
    }

    const listaViagens = viagens.trips ? viagens.trips.map((viagem) => {
        return (
            <ViagemCard
                id={viagem.id}
                viagem={viagem}
                removerViagem={removerViagem}

            />
        )
    }) : (
        <Carregando>carregando...</Carregando>
    )


    /* Requisição de criar viagem, vem de um arquivo externo (services) e só passamos os argumentos*/

    const onClickCriarViagem = (e) => {
        e.preventDefault();
        console.log(form)
        criarViagem(form, clear, getData);
    }


    return (
        <ContainerViagens>
            <Header
                paginaAtual={"admin"}
            />

            <TituloCriar onClick={botaoCriar}>Clique aqui para criar nova viagem</TituloCriar>

            {criarViagem ? (
                <ContainerCriar>

                    <label htmlFor={"name"}>Nome: </label>
                    <input
                        id={"name"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                    />

                    <label htmlFor="planet">Planeta: </label>
                    <select
                        id="planet"
                        name="planet"
                        defaultValue={""}
                        onChange={onChange}
                    >
                        <option value={""} disabled>Escolha um planeta</option>
                        {planets.map((planet) => {
                            return <option value={planet} key={planet}>{planet}</option>
                        })}

                    </select>

                    <label htmlFor="data">Data de lançamento: </label>
                    <input
                        id="data"
                        name="date"
                        type={"date"}
                        value={form.date}
                        onChange={onChange}
                    />

                    <label htmlFor="descricao">Descrição: </label>
                    <input
                        id="descricao"
                        name="description"
                        value={form.description}
                        onChange={onChange}
                    />

                    <label htmlFor="duracao">Duração: </label>
                    <input
                        id="duracao"
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                    />

                    <button onClick={onClickCriarViagem}>Criar</button>


                </ContainerCriar>
            ) : (
                <></>
            )}

            <CardsLista>
                {listaViagens}
            </CardsLista>
        </ContainerViagens>
    );
}