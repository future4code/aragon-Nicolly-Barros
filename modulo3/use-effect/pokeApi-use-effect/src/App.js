import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";
import styled from "styled-components"

const SelectNav = styled.nav`
  text-align:center;
` 

const Header = styled.header`
  text-align:center;
`

const Main = styled.main`
  text-align:center;
`

function App() {
  // Passo 3b
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")


  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])


  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };

  // Passo 3e
  const pokeOptions = pokeList.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });


  const pokemon = pokeName && <PokeCard pokeName={pokeName}/>;

  return (
    <>
      <Header>
        <h1>Pokémons</h1>
      </Header>
      <hr />
      <SelectNav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>

        <select id={"select-pokemon"} onChange={changePokeName} >
          <option value={""}>Nenhum</option>
          {pokeOptions}
        </select>
      </SelectNav>
      <Main>
        {pokemon}
      </Main>
    </>
  );
};

export default App;
