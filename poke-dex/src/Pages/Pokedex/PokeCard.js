import React from "react";
import {
  CardContainer,
  ButtonPokemonContainer,
  ButtonCard,
} from "../Home/styled";
import useRequestData from "../../hooks/useRequestData";
import { useHistory } from "react-router-dom";

function PokeCard(props) {
  const pokemon = useRequestData(props.url);

  const history = useHistory();

  if (pokemon == null) {
    return null;
  }

  const goToPokedexDetalis = (pokemonName) => {
    history.push("/pokedexDetalis/" + pokemonName);
  };

  return (
    <CardContainer>
      <img src={pokemon.sprites.front_default} alt={"pokemon"} />
      <div>{props.pokemon.name}</div>
      <ButtonPokemonContainer>
        <ButtonCard
          onClick={() =>
            props.removePokemonFromPokedex(props.pokemon, props.index)
          }
        >
          remover
        </ButtonCard>
        <ButtonCard onClick={() => goToPokedexDetalis(pokemon.name)}>
          detalhes
        </ButtonCard>
      </ButtonPokemonContainer>
    </CardContainer>
  );
}

export default PokeCard;
