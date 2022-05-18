import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"

const Card = styled.figure`
  text-align: center;
  border: 3px solid black;
  border-radius: 7px;
  padding-top: 20px;
  margin-left: 10vh;
  margin-right: 10vh;
  background-color: #fffafa;
`

function PokeCard(props) {
  // Passo 4b
  const [pokemon, setPokemon] = useState({})

  // Passo 4c
  useEffect(() => {
    pegaPokemon(props.pokeName)
  }, []);

  // Passo 4c

  useEffect(() => {
    if (props.pokeName !== "") {
      pegaPokemon(props.pokeName)
    }
  }, [props.pokeName]);

  // Passo 4c
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data);
        console.log(pokemon)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card>
        <strong > {pokemon.name && pokemon.name.toUpperCase()}</strong>

        <p>Peso: {pokemon.weight * 0.1} Kg</p>

        <p>Tipo: {pokemon.types && pokemon.types[0].type.name} </p>

        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
    </Card>
  );
};

export default PokeCard;
