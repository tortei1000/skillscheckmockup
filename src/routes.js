import React from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import CreateRecipe from './components/CreateRecipe';



export default (

  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={CreateRecipe} path="/createrecipe" />
  </Switch>
)