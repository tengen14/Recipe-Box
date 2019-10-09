import React from "react";
import { recipeData } from "../seed";
import "../index.css"

class RecipeList extends React.Component {
  state = { recipes: recipeData };

  doggard = () => {
      console.log(this.state);
  }

  render() {
    return (
      <div id="recipe-list" className="container overflow-auto">
        <div>{recipeData[0].recipe}</div>
        <div>{recipeData[1].recipe}</div>
        <div>{recipeData[2].recipe}</div>
        <div>{recipeData[3].recipe}</div>
      </div>
    );
  }
}

export default RecipeList;
