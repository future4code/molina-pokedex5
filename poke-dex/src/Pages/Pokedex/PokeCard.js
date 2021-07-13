import React from "react";
import {
  CardContainer,
  ButtonContainer,
  ButtonCard,
  ImagemContainer,
} from "./Styled";

function PokeCard() {
  return (
    <CardContainer>
      <ImagemContainer>
        <h4>POKE CARD</h4>
      </ImagemContainer>
      <ButtonContainer>
        <ButtonCard>remover</ButtonCard>
        <ButtonCard>detalhes</ButtonCard>
      </ButtonContainer>
    </CardContainer>
  );
}

export default PokeCard;
