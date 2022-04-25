import React from 'react';
import styled from 'styled-components'

const Secao = styled.section`
    text-align: center;
`

class Etapa2 extends React.Component{
    render() {
        return (
            <Secao>
             <h2>Etapa 2 - Informações do Ensino Superior </h2>
             <p>5. Qual curso?</p>
             <input></input>
             <p>6. Qual a unidade de ensino?</p>
             <input></input>
            </Secao>
        )
    }
}

export default Etapa2;