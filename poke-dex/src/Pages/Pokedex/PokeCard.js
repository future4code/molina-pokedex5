import React from "react";
import {
  CardContainer,
  ButtonContainer,
  ButtonCard,
  ImagemContainer,
} from "./Styled";
import useRequestData from "../../hooks/useRequestData";

function PokeCard(props) {
  const pokemon = useRequestData(props.url);

  if (pokemon == null) {
    return null;
  }

  return (
    <CardContainer>
      <img src={pokemon.sprites.front_default} alt={"pokemon"} />
      <div>{props.pokemon.name}</div>
      <ButtonContainer>
        <ButtonCard
          onClick={() =>
            props.removePokemonFromPokedex(props.pokemon, props.index)
          }
        >
          remover
        </ButtonCard>
        <ButtonCard>detalhes</ButtonCard>
      </ButtonContainer>
    </CardContainer>
  );
}

export default PokeCard;
