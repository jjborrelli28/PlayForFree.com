import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Donations } from "../components/Donations";
import { Game } from "../components/Game";
import { HomeScreen } from "../components/HomeScreen";
import { NavBar } from "../components/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div className="app-router">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/donations" component={Donations} />
          <Route exact path="/game" component={Game} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
