import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import PokeCard from "./PokeCard";
import { HeaderContainer, ButtonGoListPokemon } from "./styled";
import {
  MainContainer,
  ListPokemonsContainer,
  ImgPokemon,
} from "../Home/styled";

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
        <ButtonGoListPokemon onClick={goToHome}>
          <h3>Lista de Pokemons</h3>
        </ButtonGoListPokemon>
        <ImgPokemon>
          <img
            src={
              "https://cdn2.bulbagarden.net/upload/archive/4/4b/20100413180610%21Pok%C3%A9dex_logo.png"
            }
          />
        </ImgPokemon>
      </HeaderContainer>
      <MainContainer>
        <ListPokemonsContainer>
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
        </ListPokemonsContainer>
      </MainContainer>
    </div>
  );
}

export default Pokedex;
