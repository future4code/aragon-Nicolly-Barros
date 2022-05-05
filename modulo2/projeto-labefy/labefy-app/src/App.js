import React from 'react';
import CriarPlaylist from './components/CriarPlaylist';
import VerPlaylists from './components/VerPlaylists'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

class App extends React.Component {
  render() {
    return (
      <Container>
        <h1>Labefy</h1>
        <CriarPlaylist />
        <VerPlaylists />
      </Container>
    );
  }
}

export default App;