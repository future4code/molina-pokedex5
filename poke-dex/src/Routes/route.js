import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { Home } from "../Pages/Home";
import Pokedex from "../Pages/Pokedex/Pokedex";
import { PokedexDetalis } from "../Pages/pokedexDetalis";

export const RotasList = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/pokedex"}>
          <Pokedex />
        </Route>

        <Route exact path={"/pokedexDetalis"}>
          <PokedexDetalis />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
