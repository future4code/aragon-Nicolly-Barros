import React from 'react';
import styled from 'styled-components'
import PaginaAtual from './pages/PaginaAtual';

const ContainerGeral = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-align: center; 
`

function App() {
  return (
    <ContainerGeral>
      <PaginaAtual />
    </ContainerGeral>
  );
}

export default App;
