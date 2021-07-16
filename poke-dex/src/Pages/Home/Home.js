import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import PokeCards from "./PokeCards";
import {
  MainContainer,
  HomeContainer,
  HeaderContainer,
  ButtonHomeContainer,
  ButtonGoPokedex,
  ListPokemonsContainer,
  ImagemSacana,
  ImgPokemon,
} from "./styled";
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
    <HomeContainer>
      <HeaderContainer>
        <ImgPokemon>
          <img
            src={
              "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"
            }
          />
        </ImgPokemon>
        <ButtonHomeContainer>
          <ButtonGoPokedex onClick={goToPokedex}>
            <ImagemSacana>
              <img
                src={
                  "https://toucantoco.com/blog/wp-content/uploads/2016/07/Capture-d%E2%80%99e%CC%81cran-2016-07-19-a%CC%80-15.27.31.png"
                }
              />
            </ImagemSacana>
          </ButtonGoPokedex>
        </ButtonHomeContainer>
      </HeaderContainer>
      <MainContainer>
        <ListPokemonsContainer>
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
        </ListPokemonsContainer>
      </MainContainer>
    </HomeContainer>
  );
};
