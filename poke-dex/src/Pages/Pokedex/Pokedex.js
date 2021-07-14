import React from "react";
import { useHistory } from "react-router-dom";
import PokeCard from "./PokeCard";
import { HeaderContainer, ButtonGoBack, MainContainer } from "./Styled";

function Pokedex() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
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
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </MainContainer>
    </div>
  );
}

export default Pokedex;
