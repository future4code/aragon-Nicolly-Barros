import React, { useEffect, useState } from "react";
import { URL, PATH } from '../constants/urls';
import axios from 'axios';
import Like from '../icones/like.png';
import Dislike from '../icones/dislike.png';
import styled from 'styled-components'

const BotaoMatch1 = styled.img`
  width: 30px;
  margin:30px;

    &:hover{
        -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
`
const ButtaoResetar = styled.button`
    border-radius: 3px;
    border-color: red;
    background: white;
    color: red;
    font-weight: bold;
    height: 30px;
    margin-right:20px;

    &:hover{
        color:black;
    };
`

const ImagemPerson = styled.img`
    border-radius: 100px;
    max-width: 300px;
    max-height:300px;
    box-shadow: 2px 2px 2px 2px red;
`

const BotaoMatch2 = styled.img`
  width: 30px;
  margin:30px;

    &:hover{
        -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
`

const ContainerPerfis = styled.div`
    margin-left:30px;
    margin-right:30px;
`

function Perfis() {
    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        buscarPerfil();
    }, [])

    const buscarPerfil = () => {
        axios.get(`${URL}/${PATH}/person`)
            .then((res) => {
                console.log(res.data.profile)
                setPerfil(res.data.profile)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    const escolherPerfil = (perfilId, escolhido) => {
        const body = {
            id: perfilId,
            choice: escolhido
        }

        axios.post(`${URL}/${PATH}/choose-person`, body)
            .then((res) => {
                if (body.choice && res.data.isMatch) {
                    alert("❤️ Deu match!!! ❤️");
                };
                buscarPerfil()
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    const resetarPerfis = () => {
        axios.put(`${URL}/${PATH}/clear`)
            .then((res) => {
                alert("Perfis resetados com sucesso!")
                buscarPerfil()
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    const cardPerfil = perfil ? (
        <ContainerPerfis>
            <ImagemPerson
                src={perfil.photo}
                alt="foto do perfil"
                height={"150px"}
            ></ImagemPerson>

            <section>
                <h2>♥︎ {perfil.name}, {perfil.age} anos</h2>
                <p>♥︎ {perfil.bio}</p>
            </section>

            <BotaoMatch1 src={Dislike} onClick={() => { escolherPerfil(perfil.id, false) }}></BotaoMatch1>
            <BotaoMatch2 src={Like} onClick={() => { escolherPerfil(perfil.id, true) }}></BotaoMatch2>

        </ContainerPerfis>
    ) : (
        <div>
            <h1>Acabou os perfis</h1>
            <ButtaoResetar onClick={() => resetarPerfis()}>Resetar perfis</ButtaoResetar>
        </div>
    )

    return (
        <div>
            {cardPerfil}
        </div>
    );
}

export default Perfis;