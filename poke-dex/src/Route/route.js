import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { Home } from "../Pages/Home/Home";
import Pokedex from "../Pages/Pokedex/Pokedex";
import PokedexDetails from "../Pages/PokemonsDetalis/Detalis"
export const RotasList = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>

        <Route path={"/pokedex"}>
          <Pokedex />
        </Route>

        <Route path={"/pokedexDetalis/:pokemon"} component={PokedexDetails}/>
      </Switch>
    </BrowserRouter>
  );
};
