import Header from "../../components/header/Header";
import ViagemCard from "../../components/card/ViagemCard";
import { useRequestData } from "../../hooks/useRequestData";
import { criarViagem, deletarViagem } from "../../services/requests";
import { useForm } from "../../hooks/useForm";
import { planets } from "../../constants/planets";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerViagens, CardsLista, TituloCriar, ContainerCriar, Carregando } from "./styledAdmin";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function AdminPage() {

    const { form, onChange, clear } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const [viagens, getData] = useRequestData("trips", {}) //aqui utilizamos o custom hook criado na pasta hooks, passando os 2 argumentos necessaŕios.
    const [criacaoViagem, setCriacaoViagem] = useState(false)

    useProtectedPage()


    const botaoCriar = () => {
        setCriacaoViagem(!criacaoViagem)
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

            {criacaoViagem ? (
                <ContainerCriar>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2.3, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
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
                            id="date"
                            variant="outlined"
                            onChange={onChange}
                            value={form.date}
                            name="date"
                            size="small"
                            type={"date"}
                            color="secondary"
                        />

                        <TextField
                            id="description"
                            label="Descrição"
                            variant="outlined"
                            onChange={onChange}
                            value={form.description}
                            name="description"
                            size="small"
                            color="secondary"
                        />

                        <TextField
                            id="durationInDays"
                            label="Duração(em dias)"
                            variant="outlined"
                            onChange={onChange}
                            value={form.durationInDays}
                            name="durationInDays"
                            size="small"
                            color="secondary"
                        />

                    </Box>



                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Planeta </InputLabel>
                        <Select
                            id="demo-simple-select-label"
                            name="planet"
                            defaultValue={""}
                            size="small"
                            label="Planeta"
                            onChange={onChange}
                        >
                            <MenuItem value={""} disabled>Escolha uma planeta</MenuItem>
                            {planets.map((planet) => {
                                return <MenuItem
                                    key={planet}
                                    value={planet}
                                >
                                    {planet}
                                </MenuItem>
                            })}

                        </Select>
                    </FormControl>

                    <br/>
                    <br/>

                    <Button color="secondary" onClick={onClickCriarViagem}>Criar</Button>


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