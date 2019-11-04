import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipe } from "../../../actions";
import "../../../index";

class RecipeList extends React.Component {
  renderList = () => {
    return this.props.recipes.map(recipe => {
      return (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <li onClick={() => this.props.getRecipe(recipe.id)}>
            {recipe.title}
          </li>
        </Link>
      );
    });
  };

  render() {
    const styleVanillaRecipeList = {
      borderBottomRightRadius: '0px',
      borderBottomLeftRadius: '0px'
    }

    if (!this.props.selectedRecipe) {
      return (
        <div id="recipe-list" className="ui container" style={styleVanillaRecipeList}>
          <ul>{this.renderList()}</ul>
        </div>
      );
    } else {
      return (
        <div id="recipe-list" className="ui container">
          <ul>{this.renderList()}</ul>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { getRecipe }
)(RecipeList);
