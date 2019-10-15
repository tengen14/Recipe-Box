import React from "react";
import { Router, Route } from "react-router-dom";
import RecipeIndex from "./recipes/RecipeIndex/RecipeIndex";
import history from "../history";
import "../index.css";

class App extends React.Component {
render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Route path="/" exact component={RecipeIndex}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
