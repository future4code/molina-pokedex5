import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { useHistory } from "react-router-dom";
import {
  CardContainer,
  ButtonContainer,
  ButtonCard,
} from "./styled";

const PokeCards = (props) => {
  const pokemon = useRequestData(props.url);

  const history = useHistory();

  const goToPokedex = () => {
    history.push("/pokedex");
  };

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
            <ButtonContainer>
              <ButtonCard onClick={goToPokedex}>Adicionar a Pokedex</ButtonCard>
              <ButtonCard onClick={() => goToPokedexDetalis(pokemon.name)}>Ver Detalhes</ButtonCard>
            </ButtonContainer>
          </CardContainer>
        )}
      </div>
    </div>
  );
};

export default PokeCards;
