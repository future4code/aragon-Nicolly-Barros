import React from "react";
import styled from "styled-components";


const Mensagens = styled.p`
    padding-left: 10px;
`

const TextoNegrito = styled.span`
    font-weight: bold;
`
const NavMensagens = styled.section`
    display: flex;
`
const NomeInput = styled.input`
  width: 100px;
`

const MensagemInput = styled.input`
  flex: 1;
`

class EnviarMensagem extends React.Component {
    state ={
        mensagens: [
          {
            nome: "Isa Daru",
            mensagem: "Bom dia, genteee",
          },
          {
            nome: "Lucas Macedo",
            mensagem: "Eai ^^",
          }
        ],
        valorInputNome: "",
        valorInputMensagem: "",
        valorDoisPontos: ":"
    }

    
    enviarMensagem = () => {
        const novaMensagem = {
    
          nome: this.state.valorInputNome,
          mensagem: this.state.valorInputMensagem,
        }
    
        const novasMensagens = [...this.state.mensagens, novaMensagem];
        this.setState({ mensagens: novasMensagens});
        /* this.setState({valorInputNome: ""}) */
        this.setState({valorInputMensagem: ""})
    }
      
    onChangeInputNome = (event) => {
        this.setState({ valorInputNome: event.target.value });
    };
    
    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
    };

    render() {
        const verMensagens = this.state.mensagens.map((mensagem) => {
            return (
                <Mensagens>
                <TextoNegrito>{mensagem.nome} : </TextoNegrito>{mensagem.mensagem}
                </Mensagens>
            );
        });

        return(
            <div>
                <main> 
                    <div>{verMensagens}</div>

                    <NavMensagens>
                        <NomeInput
                        value={this.state.valorInputNome}
                        onChange={this.onChangeInputNome}
                        placeholder={"Nome"}
                        />

                        <MensagemInput
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                        placeholder={"Mensagem"}
                        />

                        <button type="submit" onClick={this.enviarMensagem}>Enviar</button>
                    </NavMensagens>
                </main>
          </div>
        )
    }
}

export default EnviarMensagem