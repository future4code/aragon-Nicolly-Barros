import Header from "../components/Header";
import ViagemCard from "../components/ViagemCard";
import { useRequestData } from "../hooks/useRequestData";
import { criarViagem, deletarViagem } from "../services/requests";
import { useForm } from "../hooks/useForm";
import { planets } from "../constants/planets";
import { useProtectedPage } from "../hooks/useProtectedPage";

export default function AdminPage() {

    const { form, onChange, clear } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const [viagens, getData] = useRequestData("trips", {}) //aqui utilizamos o custom hook criado na pasta hooks, passando os 2 argumentos necessaŕios.

    useProtectedPage()

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
        <p>carregando...</p>
    )


    /* Requisição de criar viagem, vem de um arquivo externo (services) e só passamos os argumentos*/

    const onClickCriarViagem = (e)=>{
        e.preventDefault();
        console.log(form)
        criarViagem(form, clear, getData);
    }

    
    return (
        <div>
            <Header
                paginaAtual={"admin"}
            />

            <form onSubmit={onClickCriarViagem}>
                <h3>Criar nova viagem</h3>

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
                    {planets.map((planet)=>{
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

                <button type={"submit"}>Criar</button>

            </form>

            <hr />
            <h3>Lista de viagens</h3>
            {listaViagens}
        </div>
    );
}