import React from 'react';
import CriarPlaylist from './components/CriarPlaylist';
import VerPlaylists from './components/VerPlaylists'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const Titulo = styled.h1`
  font-size: 40px;
`
class App extends React.Component {
  render() {
    return (
      <Container>
        <Titulo>♪ Labefy ♪</Titulo>
        <VerPlaylists />
      </Container>
    );
  }
}

export default App;