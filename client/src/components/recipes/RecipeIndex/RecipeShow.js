import React from "react";
import "../../../index";

class RecipeShow extends React.Component {
  // listIngredients = () => {
  //   if (this.props.selectedRecipe) {
  //     return this.props.selectedRecipe.ingredients.map((ingredient, i) => {
  //       return <li key={i}>{ingredient}</li>;
  //     });
  //   }
  // };

  // listDirections = () => {
  //   if (this.props.selectedRecipe) {
  //     return this.props.selectedRecipe.directions.map((direction, i) => {
  //       return <li key={i}>{direction}</li>;
  //     });
  //   }
  // };

  render() {
    return (
      <div id="recipe-desc" className="container">
         {/* <h2 id="recipe-title">{this.props.selectedRecipe.title}</h2>
        <div id="recipe-body" className="overflow-auto">
          <ol>{this.listIngredients()}</ol>
          <ul>{this.listDirections()}</ul>
        </div>
        <h2 id="recipe-add">Recipe Add</h2>  */}
      </div>
    );
  }
}

export default RecipeShow;
