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
    return (
      <div id="recipe-list" className="ui container">
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {  };
};
// what should I do with mapStateToProps, it's already functioning in RecipeIndex

export default connect(
  mapStateToProps,
  { getRecipe }
)(RecipeList);
