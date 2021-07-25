import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { useHistory } from "react-router-dom";
import { CardContainer, ButtonPokemonContainer, ButtonCard } from "./styled";

const PokeCards = (props) => {
  const pokemon = useRequestData(props.url);

  const history = useHistory();

  const goToPokedexDetalis = (pokemonName) => {
    history.push("/pokedexDetalis/" + pokemonName);
  };

  return (
    <div>
      <div>
        {pokemon && (
          <CardContainer>
            <img src={pokemon.sprites.front_default} alt={"pokemon"} />
            <div>{pokemon.name}</div>
            <ButtonPokemonContainer>
              <ButtonCard
                onClick={() =>
                  props.addPokemonToPokedex(props.pokemon, props.index)
                }
              >
                Adicionar na Pokedex
              </ButtonCard>
              <ButtonCard onClick={() => goToPokedexDetalis(pokemon.name)}>
                Ver Detalhes
              </ButtonCard>
            </ButtonPokemonContainer>
          </CardContainer>
        )}
      </div>
    </div>
  );
};

export default PokeCards;
