import './App.css';
import React from 'react';

class App extends React.Component {

  state ={
    mensagens: [
      {
        nome: "oi",
        mensagem: "",
      }
    ],
    valorInputNome: "",
    valorInputMensagem: ""
  }

  enviarMensagem = () => {
    const novaMensagem = {

      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputFoto,
    }

    const novasMensagens = [...this.state.postagens, novaMensagem];
    this.setState({ mensagens: novasMensagens});
    this.setState({valorInputNome: ""})
    this.setState({valorInputMensagem: ""})
  }
  
  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render(){
    const verMensagens = this.state.mensagens.map((mensagem) => {
      return(
        <Post
          nome= {mensagem.nome}
          mensagem= {mensagem.mensagem}
        />
      );
    });
    return(
      <div>
          <div>
            <h2>Faça uma nova postagem</h2>
            <Inputs
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
            />

            <Inputs
              value={this.state.valorInputFoto}
              onChange={this.onChangeInputFoto}
              placeholder={"Foto de Usuário (link/URL)"}
            />

            <Inputs 
              value={this.state.valorInputPostagem}
              onChange={this.onChangeInputPostagegm}
              placeholder={"Foto do Post (link/URL)"}
            />

            <button onClick={this.adicionarPostagem}>Postar</button>
          </div>

          <div>{verMensagens}</div>
      </div>
    )
  }
}

export default App;
