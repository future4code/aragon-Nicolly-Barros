import React from 'react';
import style from 'styled-components'

const BigCard =style.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const Imagem = style.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Titulo = style.h4`
    margin-bottom: 15px;
`

const ContainerInfos = style.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCard>
            <Imagem src={ props.imagem } />
            <ContainerInfos>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </ContainerInfos>
        </BigCard>
    )
}

export default CardGrande;