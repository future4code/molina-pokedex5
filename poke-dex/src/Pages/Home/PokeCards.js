import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { useHistory } from "react-router-dom";
import { CardContainer, ButtonContainer, ButtonCard } from "./styled";

const PokeCards = (props) => {
  const pokemon = useRequestData(props.url);

  const history = useHistory();

  const goToPokedex = () => {
    history.push("/pokedex");
  };

  const goToPokedexDetails = () => {
    history.push("/pokedexDetalis");
  };

  return (
    <div>
      <div>
        {pokemon && (
          <CardContainer>
            <img src={pokemon.sprites.front_default} alt={"pokemon"} />
            <div>{pokemon.name}</div>
            <ButtonContainer>
              <ButtonCard
                // onClick={goToPokedex}
                onClick={() =>
                  props.addPokemonToPokedex(props.pokemon, props.index)
                }
              >
                Adicionar a Pokedex
              </ButtonCard>
              <ButtonCard onClick={goToPokedexDetails}>Ver Detalhes</ButtonCard>
            </ButtonContainer>
          </CardContainer>
        )}
      </div>
    </div>
  );
};

export default PokeCards;
