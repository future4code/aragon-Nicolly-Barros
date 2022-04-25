import React from 'react';
import styled from 'styled-components'

const Secao = styled.section`
    text-align: center;
`

class Finalizacao extends React.Component{
    render() {
        return (
            <Secao>
                <h2>O formulário acabou!</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Secao>
        )
    }
}

export default Finalizacao;