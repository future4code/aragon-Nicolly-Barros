import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL, PATH } from '../constants/urls';
import styled from 'styled-components'

const Imagem = styled.img`
    height:60px;
    width:60px;
    border-radius: 50%;
`

const ListaMatches = styled.div`
    display:flex;
    justify-content:center:
    align-items:center;
    width: 30%;
    margin:10px;
    
`

const ContainerMatches = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    justify-items:center;
    
`

const NomeCandidato = styled.p`
    margin-left:10px;
    margin-top: 30px;
`

function Matches() {

    const [listaMatches, setListaMatches] = useState(undefined)

    useEffect(() => {
        pegarMatches()
    }, [])

    const pegarMatches = () => {
        axios.get(`${URL}/${PATH}/matches`)
            .then((res) => {
                setListaMatches(res.data.matches);
                console.log(listaMatches);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const mostrarMatches = listaMatches && listaMatches.map((match) => {
        return <ListaMatches key={match.id}>
            <Imagem
                src={match.photo}
                alt={`foto de ${match.name}`}

            ></Imagem>

            <NomeCandidato>{match.name}</NomeCandidato>

        </ListaMatches>
    })
    
    return (

        <ContainerMatches>
            <h1>Seus Matches</h1>
            {mostrarMatches}

        </ContainerMatches>

    );
}

export default Matches;