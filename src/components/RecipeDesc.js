import React from "react";
import { recipeData } from "../seed";

const RecipeDesc = () => {
  console.log(recipeData);
  return (
    <div id="recipe-desc" className="container">
      <h2 id="recipe-title">{recipeData[0].recipe}</h2>
      <div id="recipe-body" className="overflow-auto">
        <h3>{recipeData[0].ingredients}</h3>
        <p>{recipeData[0].directions}</p>
      </div>
      <h2 id="recipe-add">Recipe Add</h2>
    </div>
  );
};

export default RecipeDesc;
