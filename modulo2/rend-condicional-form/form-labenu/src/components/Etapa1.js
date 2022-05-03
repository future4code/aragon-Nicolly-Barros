import React from 'react';
import styled from 'styled-components'

const Secao = styled.section`
    text-align: center;
`

class Etapa1 extends React.Component{
    render() {
        return (
            <Secao>
                <div><h2>Etapa 1 - Dados Gerais</h2></div>
                <p>1. Qual o seu nome?</p>
                <input></input>
                <p>2. Qual sua idade?</p>
                <input></input>
                <p>3. Qual seu email?</p>
                <input></input>
                <p>4. Qual a sua escolaridade?</p>
                <select id="escolaridade">
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
                

            </Secao>
        )
    }
}

export default Etapa1;