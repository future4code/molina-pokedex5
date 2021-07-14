import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { Home } from "../Pages/Home/Home";
import Pokedex from "../Pages/Pokedex/Pokedex";
import { PokedexDetalis } from "../Pages/pokedexDetalis";

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

        <Route path={"/pokedexDetalis"}>
          <PokedexDetalis />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
