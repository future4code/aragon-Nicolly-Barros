
import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import styled from "styled-components"
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Finalizacao from './components/Finalizacao';


const Botao = styled.button`
  margin-top: 20px;
  border-radius: 5px;
`

class App extends React.Component{

  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    const novaEtapa = this.state.etapa + 1
    this.setState({etapa : novaEtapa})
  }

  renderizarEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Finalizacao />
      default:
        return <h3>Página não encontrada</h3>
    }
  }

  render(){
    return (
      <div className='App'>
        {this.renderizarEtapa()}

        {this.state.etapa !== 4 && (
            <Botao onClick={this.irParaProximaEtapa} >Próxima etapa</Botao>
        )}
      </div>
    )
  }
}

export default App;
