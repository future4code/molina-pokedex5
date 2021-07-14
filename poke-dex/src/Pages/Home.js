import React, { useContext } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import PokeCards from "../components/PokeCard/PokeCards";

export const Home = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  return (
    <div>
      {states.pokemon &&
        states.pokemon.map((item, index) => {
          return <PokeCards url={item.url} />;
        })}
      {setters.pokemon}
    </div>
  );
};
