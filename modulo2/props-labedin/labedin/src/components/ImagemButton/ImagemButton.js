import React from 'react';
import style from 'styled-components'

const ContainerImagemButton = style.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const Imagem = style.img`
    width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ContainerImagemButton>
            <Imagem src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerImagemButton>

    )
}

export default ImagemButton;