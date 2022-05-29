import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import ViagemCard from "../../components/card/ViagemCard";
import { paises } from "../../constants/paises";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { paginaAdmin } from "../../routes/coordinator";
import { envioCandidatura } from "../../services/requests";
import { CardsLista, TituloInscreva, ContainerHome, DivInputs, Carregando} from "./styledHome";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';




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


    const listaViagens = viagens.trips ? viagens.trips.map((viagem) => {
        return (
            <ViagemCard
                id={viagem.id}
                viagem={viagem}
            />
        )
    }) : (
        <Carregando> Carregando...</Carregando>
    )

    return (
        <ContainerHome>
            <Header
                paginaAtual={"home"}
            />

            <TituloInscreva>
                <p>Gostou de nossas viagens? </p>
                <h4 onClick={botaoInscrever}> Inscreva-se</h4>
            </TituloInscreva>


            {inscrever ? (
                <DivInputs>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '25ch' },
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

                    </Box>


                    <br />

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Viagem </InputLabel>
                            <Select
                                id="demo-simple-select-label"
                                name="trip"
                                defaultValue={""}
                                size="small"
                                label="Viagem"
                                onChange={onChangeIdViagem}
                            >
                                <MenuItem value={""} disabled>Escolha uma viagem</MenuItem>
                                {viagens.trips && viagens.trips?.map((viagem) => {
                                    return <MenuItem
                                        key={viagem.id}
                                        value={viagem.id}
                                    >
                                        {viagem.name}
                                    </MenuItem>
                                })}

                            </Select>
                        </FormControl>

                    </Box>

                    <br/>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>

                            <InputLabel id="demo-simple-select-label"> País de origem</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id={"country"}
                                name={"country"}
                                value={form.country}
                                label="País de origem"
                                onChange={onChange}
                                size="small"
                            >
                                <option value={""} disabled >Escolha um País</option>
                                {paises.map((pais) => {
                                    return <MenuItem value={pais} key={pais}>{pais}</MenuItem>
                                })}
                            </Select>

                        </FormControl>
                    </Box>

                    <br />

                    <Button color="secondary" onClick={onClickCandidato}>Enviar Candidatura</Button>

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