import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import RecipeIndex from "./recipes/RecipeIndex";
import RecipeCreate from "./recipes/RecipeCreate";
import history from "../history";
import "../index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={RecipeIndex} />
            <Route exact path="/recipes/new" component={RecipeCreate} />
            <Route exact path="/recipes/:id" component={RecipeIndex} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
