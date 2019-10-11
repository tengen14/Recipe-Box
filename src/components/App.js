import React from "react";
import RecipeList from "./RecipeList";
import RecipeDesc from "./RecipeDesc";
import { recipeData } from "../seed";
import "../index.css";

class App extends React.Component {
  state = { recipes: recipeData };

  recipeSelect = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <h1>Recipe Box</h1>
        <RecipeList
          recipes={this.state.recipes}
          recipeSelect={this.recipeSelect}
        />
        <RecipeDesc recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
