import React from "react";
import { Router, Route } from "react-router-dom";
import RecipeList from "./recipes/RecipeIndex/RecipeIndex";
import "../index.css";

class App extends React.Component {
render() {
    return (
      <div class="container">
        <Router>
          <div>
            <Route path="/" exact component={RecipeList}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
