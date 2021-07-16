import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../constants/Base_URL";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    requests.getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get(`${baseUrl}/?limit=20`)
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const states = { pokemon };
  const setters = { setPokemon };
  const requests = { getPokemons };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
