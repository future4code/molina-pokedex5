import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import PokeCard from "./PokeCard";
import { HeaderContainer, ButtonGoBack, MainContainer } from "./Styled";

function Pokedex() {
  const { states, setters } = useContext(GlobalStateContext);

  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const removePokemonFromPokedex = (pokemon, index) => {
    const newPokedexList = [...states.pokedex];
    newPokedexList.splice(index, 1);
    setters.setPokedex(newPokedexList);

    const newPokemonList = [...states.pokemon];
    newPokemonList.push(pokemon);
    setters.setPokemon(newPokemonList);
  };

  return (
    <div>
      <HeaderContainer>
        <ButtonGoBack onClick={goToHome}>
          <h3>Voltar para a lista de pokemons</h3>
        </ButtonGoBack>
        <h1>POKEDEX</h1>
      </HeaderContainer>
      <MainContainer>
        {states.pokedex &&
          states.pokedex
            .sort((pokemonA, pokemonB) => {
              return pokemonA.id - pokemonB.id;
            })
            .map((pokemon, index) => {
              return (
                <PokeCard
                  key={pokemon.name}
                  url={pokemon.url}
                  pokemon={pokemon}
                  removePokemonFromPokedex={removePokemonFromPokedex}
                  index={index}
                />
              );
            })}
      </MainContainer>
    </div>
  );
}

export default Pokedex;
