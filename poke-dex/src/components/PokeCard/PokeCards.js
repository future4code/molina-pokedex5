import React from "react";
import useRequestData from "../../hooks/useRequestData";
import { useHistory } from "react-router-dom";
import {CardContainer} from "./styled"


const PokeCards = (props) => {
  const pokemon = useRequestData(props.url);

  const history = useHistory();

  const goToPokedex = () => {
    history.push("/pokedex");
  };

  const goToPokedexDetalis = () => {
    history.push("/pokedexDetalis");
  };

  return (
    <CardContainer>
      {pokemon && (
        <div>
          <img src={pokemon.sprites.front_default} alt={"pokemon"} />
          <div>{pokemon.name}</div>
          <div>
            <button onClick={goToPokedex}> PokedexList</button>
            <button onClick={goToPokedexDetalis}> PokedexDetalis</button>
          </div>
        </div>
      )}
    </CardContainer>
  );
};

export default PokeCards;
