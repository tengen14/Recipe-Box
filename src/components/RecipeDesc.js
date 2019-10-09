import React from "react";
import { recipeData } from "../seed";

const RecipeDesc = props => {
  return (
    <div id="recipe-desc" className="container">
      <h2 id="recipe-title">{props.title}</h2>
      <div id="recipe-body" className="overflow-auto">
        <h3>{props.ingredients}</h3>
        <p>{props.directions}</p>
      </div>
      <h2 id="recipe-add">Recipe Add</h2>
    </div>
  );
};

export default RecipeDesc;
