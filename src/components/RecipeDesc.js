import React from "react";

class RecipeDesc extends React.Component {
  render() {
    const title = this.props.selectedRecipe.title;
    const ingredients = this.props.selectedRecipe.ingredients;
    const directions = this.props.selectedRecipe.directions;

    return (
      <div id="recipe-desc" className="container">
        <h2 id="recipe-title">{title}</h2>
        <div id="recipe-body" className="overflow-auto">
          <h3>{ingredients}</h3>
          <p>{directions}</p>
        </div>
        <h2 id="recipe-add">Recipe Add</h2>
      </div>
    );
  }
}

export default RecipeDesc;
