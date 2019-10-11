import React from "react";
import RecipeList from "./RecipeList";
import RecipeDesc from "./RecipeDesc";
import { recipeData } from "../seed";
import "../index.css";

class App extends React.Component {
  state = { recipes: recipeData, selected_recipe: {} };

  // Set default selectedRecipe to Macaroni & Cheese
  componentDidMount() {
    this.setState({
      selected_recipe: {
        title: this.state.recipes[0].title,
        ingredients: this.state.recipes[0].ingredients,
        directions: this.state.recipes[0].directions
      }
    });
  }

  recipeSelect = recipe => {
    this.setState({ selected_recipe: recipe });
  };

  render() {
    return (
      <div>
        <h1>Recipe Box</h1>
        <RecipeList
          recipes={this.state.recipes}
          recipeSelect={this.recipeSelect}
        />
        <RecipeDesc
          recipes={this.state.recipes}
          selectedRecipe={this.state.selected_recipe}
        />
      </div>
    );
  }
}

export default App;
