import Router from "./routes/Router";
import styled from "styled-components"

const ContainerApp = styled.div`
  font-family: 'Roboto', sans-serif;;
`

function App() {
  return (
    <ContainerApp>
      <Router />
    </ContainerApp>
  );
}

export default App;
