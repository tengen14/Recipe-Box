import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes } from "../../../actions";
import "../index.css";

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  renderList = () => {
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
