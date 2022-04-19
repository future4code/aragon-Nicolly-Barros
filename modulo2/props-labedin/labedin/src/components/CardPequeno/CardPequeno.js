import React from 'react';
import style from 'styled-components'

const ContainerGeral = style.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const Imagem = style.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const ContainerMenor = style.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start; 
`
const Titulo = style.h4`
    margin-right: 5px;
`

function CardPequeno(props) {
    return (
        <ContainerGeral>
            <Imagem src={ props.imagem } />
            <ContainerMenor>
                <Titulo>{props.titulo}</Titulo>
                <p>{ props.descricao }</p>
            </ContainerMenor>
        </ContainerGeral>
    )
}

export default CardPequeno;