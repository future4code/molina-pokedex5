import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import PokeCards from "./PokeCards";
import { MainContainer, Title } from "./styled";

export const Home = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  return (
    <div>
      <Title>
        <h2>Lista de Pokémons</h2>
      </Title>
      <MainContainer>
        {states.pokemon &&
          states.pokemon.map((item, index) => {
            return <PokeCards url={item.url} />;
          })}
        {setters.pokemon}
      </MainContainer>
    </div>
  );
};
