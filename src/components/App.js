import React from "react";
import RecipeSelect from "./RecipeSelect";
import RecipeDesc from "./RecipeDesc";
import { recipeData } from "../seed";

class App extends React.Component {
  state = { recipes: recipeData };

  listRecipes = () => {
    console.log(this.state.recipes);

    return this.state.recipes.map(recipe => (
      <RecipeSelect title={recipe.title} />
    ));
  };

  render() {

    const title = "Recipe #1";
    const ingredients = "1. ingredient 2. ingredient 3. ingredient 4. ingredient 5. ingredient 6. ingredient";
    const directions = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"

    return (
      <div>
        <h1>Recipe Box</h1>
        <div id="recipe-list" className="container overflow-auto">
          <ul>{this.listRecipes()}</ul>
        </div>
        <RecipeDesc
            title={title}
            ingredients={ingredients}
            directions={directions}
        />
      </div>
    );
  }
}

export default App;
