import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Balance from "./Balance";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/balance" component={Balance} />
        </Switch>
      </Router>
    );
  }
}
