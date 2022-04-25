import React from 'react';
import styled from 'styled-components'

const Secao = styled.section`
    text-align: center;
`

class Etapa3 extends React.Component{
    render() {
        return(
            <Secao>
             <h2>Etapa 3 - Informações Gerais de Ensino</h2>
             <p>7. Por que você não terminou um curso de graduação?</p>
             <input></input>
             <p>8. Você fez algum curso complementar?</p>
             <select id="escolaridade">
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso Inglês</option>
                </select>
            </Secao>
        )
    }
}

export default Etapa3;