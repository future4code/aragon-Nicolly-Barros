import React from 'react';
import styled from 'styled-components';
import EnviarMensagem from './components/EnviarMensagem';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  /* max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column; */
`

const ContainerMensagens = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`


class App extends React.Component {
  render(){
    return(
      <Main>
          <ContainerMensagens>
            <EnviarMensagem/>
          </ContainerMensagens>
      </Main>
    )
  }
}

export default App;
