import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Form = styled.div`
  border: 2px solid;
  padding: 1rem;
  margin-bottom: 5px;
`
const Inputs = styled.input`
  margin: 1rem;

`

class App extends React.Component {

  state = {

    postagens: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: 'analuiza',
        fotoUsuario: 'https://picsum.photos/50/55',
        fotoPost: 'https://picsum.photos/200/155',
      },
      {
        nomeUsuario: 'gabriel',
        fotoUsuario: 'https://picsum.photos/50/60',
        fotoPost: 'https://picsum.photos/200/160',
      }
    ],
      valorInputNome:"",
      valorInputFoto: "",
      valorInputPostagem: ""
  }

  adicionarPostagem = () => {
    const novaPostagem = {

      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPostagem
    }

    const novoPost = [...this.state.postagens, novaPostagem];
    this.setState({ postagens: novoPost});
    this.setState({valorInputFoto: ""})
    this.setState({valorInputNome: ""})
    this.setState({valorInputPostagem: ""})
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPostagegm = (event) => {
    this.setState({ valorInputPostagem: event.target.value });
  };

  render() {
    const listaDePosts = this.state.postagens.map((postagem) => {
      return(
        <Post
          nomeUsuario= {postagem.nomeUsuario}
          fotoUsuario= {postagem.fotoUsuario}
          fotoPost= {postagem.fotoPost}
        />
      );
    });

    return (
      <MainContainer>

        <Form>
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
        </Form>

        <div>{listaDePosts}</div>
     
      </MainContainer>
    );
  }
}

export default App;