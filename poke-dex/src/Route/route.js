import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { Home } from "../Page/Home";
import { Pokedex } from "../Page/pokedex";
import { PokedexDetalis } from "../Page/pokedexDetalis";

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
