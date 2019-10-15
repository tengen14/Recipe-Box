import React from "react";
import "../../../index";

class RecipeList extends React.Component {
  renderList = () => {
    console.log(this.props.recipes);
    return this.props.recipes.map(recipe => {
      return (
        <li onClick={() => this.props.recipeSelect(recipe)} key={recipe.id}>
          {recipe.title}
        </li>
      );
    });
  };

  render() {
    return (
      <div id="recipe-list" className="container overflow-auto">
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default RecipeList;
