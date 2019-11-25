import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import RecipeIndex from "./recipes/RecipeIndex";
import RecipeCreate from "./recipes/RecipeCreate";
import RecipeEdit from "./recipes/RecipeEdit";
import RecipeDelete from "./recipes/RecipeDelete";
import history from "../history";
import "../styles/index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={RecipeIndex} />
            <Route exact path="/recipes/new" component={RecipeCreate} />
            <Route exact path="/recipes/edit/:id" component={RecipeEdit} />
            <Route exact path="/recipes/delete/:id" component={RecipeDelete} />
            <Route exact path="/recipes/:id" component={RecipeIndex} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

// Add comments detailing workflow
// Seed data
// Edit readme
// proofread application 


