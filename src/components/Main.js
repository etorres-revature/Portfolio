import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandignPage";

const Main = () => {
  <Switch>
    <Route exact page="/" component={LandingPage} />
  </Switch>;
};

export default Main;
