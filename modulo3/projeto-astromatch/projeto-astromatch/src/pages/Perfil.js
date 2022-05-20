import React, { useEffect, useState } from "react";
import { URL, PATH } from '../constants/urls';
import axios from 'axios';
import styled from 'styled-components'

const BotaoMatch1 = styled.img`
  width: 40px;
  margin:40px;

    &:hover{
        -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    @media(max-width: 700px) {
        width:30px;
        margin:20px;
  }
`

const BotaoMatch2 = styled.img`
  width: 40px;
  margin:40px;
    &:hover{
     -webkit-transform: scale(1.1);
     transform: scale(1.1);
    }

    @media(max-width: 700px) {
        width:30px;
        margin:20px;
  }

`

const BotaoLike = styled.img`
    width: 40px;
    margin:40px;
    &:hover{
     -webkit-transform: scale(1.1);
     transform: scale(1.1);
    }

    @media(max-width: 700px) {
        width:30px;
        margin:20px;
  }
`

const ButtaoResetar = styled.button`
    border: 0 solid;
    border-radius: 3px;
    background: white;
    color: #FC4F4F;
    font-weight: bold;
    height: 30px;
    margin-right:20px;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover{
        background:#FC4F4F;
        color:white;
    };
`

const ImagemPerson = styled.img`
    width: 100%;
    border-radius:6px;
    height:250px;
`


const ContainerPerfis = styled.div`
    background: #FFFAFA;
    border-radius:6px;
    width:40%;
    transition-timing-function: all ease;
    transition-duration: 2s;

    @media(max-width: 700px) {
        width:70%;
  }
`

const DivCard = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(45deg, #F76E11, #FF9F45, #FFBC80, #FC4F4F);
    height:90vh;
`

const TituloResetar = styled.div`
    color:white;
`

const Dados = styled.div`
    margin:3px;
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
        <ContainerPerfis >

            <ImagemPerson
                src={perfil.photo}
                alt="foto do perfil"
            ></ImagemPerson>

            <Dados>
                <h2>♥︎ {perfil.name}, {perfil.age} anos</h2>
                <p>♥︎ {perfil.bio}</p>
            </Dados>

            <BotaoMatch1 src="https://icones.pro/wp-content/uploads/2021/08/icone-x-avec-cercle-rouge.png" onClick={() => { escolherPerfil(perfil.id, false) }}></BotaoMatch1>
            <BotaoLike src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkz35M3WOKqIQXN2tsXN0eMFO27xLDdz0wkviYa3zSdDethATrZ0FZ5Jg5ZGmXe001Il0&usqp=CAU" onClick={() => { alert("Você deu super like ★") }}></BotaoLike>
            <BotaoMatch2 src="https://images.vexels.com/media/users/3/151002/isolated/preview/ec024d6291ed42d75b4511d60a527121-elemento-hippie-de-coracao-verde.png" onClick={() => { escolherPerfil(perfil.id, true) }}></BotaoMatch2>

        </ContainerPerfis>
    ) : (
        <TituloResetar>
            <h1>Acabou os perfis</h1>
            <ButtaoResetar onClick={() => resetarPerfis()}>Resetar perfis</ButtaoResetar>
        </TituloResetar>
    )

    return (
        <DivCard>
            {cardPerfil}
        </DivCard>
    );
}

export default Perfis;