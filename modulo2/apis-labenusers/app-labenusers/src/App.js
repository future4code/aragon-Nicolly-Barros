import logo from './logo.svg';
import './App.css';
import React from 'react';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuarios';

class App extends React.Component {

  state ={
    page: "pagina1"
  }

  trocarPagina = () => {
    if(this.state.page === "pagina1"){
      this.setState({page: "pagina2"})
    }else{
      this.setState({page: "pagina1"})
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.trocarPagina}>Trocar de tela</button>
        {this.state.page === "pagina1" 
        ? <CadastroUsuario/>
        : <ListaUsuarios/>
      }
      </div>
    );
  }
}

export default App;
