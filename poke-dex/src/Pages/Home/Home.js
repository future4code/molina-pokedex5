import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import PokeCards from "./PokeCards";
import { MainContainer, Title } from "./styled";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  const addPokemonToPokedex = (pokemon, index) => {
    const newPokeList = [...states.pokemon];
    newPokeList.splice(index, 1);
    setters.setPokemon(newPokeList);

    const newPokedexList = [...states.pokedex];
    newPokedexList.push(pokemon);
    setters.setPokedex(newPokedexList);
  };

  const history = useHistory();

  const goToPokedex = () => {
    history.push("/pokedex");
  };

  return (
    <div>
      <Title>
        <h2>Lista de Pokémons</h2>
      </Title>
      <button onClick={goToPokedex}>POKEDEX</button>
      <MainContainer>
        {states.pokemon &&
          states.pokemon
            .sort((pokemonA, pokemonB) => {
              return pokemonA.id - pokemonB.id;
            })
            .map((pokemon, index) => {
              return (
                <PokeCards
                  url={pokemon.url}
                  addPokemonToPokedex={addPokemonToPokedex}
                  index={index}
                  pokemon={pokemon}
                />
              );
            })}
        {setters.pokemon}
      </MainContainer>
    </div>
  );
};
