
import './App.css';
import React from 'react';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import styled from 'styled-components'


const TituloGeral = styled.h1`
  color: orange;
  text-shadow: 2px 2px 2px black;
  font-size: 50px;
`

class App extends React.Component {

  state = {
    page: "pagina1"
  }

  trocarPagina = () => {
    /* if (this.state.page === "pagina1") {
      this.setState({ page: "pagina2" })
    } else {
      this.setState({ page: "pagina1" })
    } 
    
    essa forma foi feita utilizando o ternário no jsx*/

    switch (this.state.page) {
      case "pagina1":
        return <CadastroUsuario telaLista={this.telaLista} />
      case "pagina2":
        return <ListaUsuarios telaCadastro={this.telaCadastro} />
      default:
        return <div>Página não encontrada!</div>
    }
  }

  telaCadastro = () => {
    this.setState({ page: "pagina1" })
  }

  telaLista = () => {
    this.setState({ page: "pagina2" })
  }

  render() {
    return (
      <div className="App">

        <TituloGeral> Labenusers</TituloGeral>

        {/*  {this.state.page === "pagina1"
          ? <CadastroUsuario />
          : <ListaUsuarios />
        }
        <button onClick={this.trocarPagina}>
          Trocar de Tela
        </button> */}

        {this.trocarPagina()}


      </div>
    );
  }
}

export default App;
