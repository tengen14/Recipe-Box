import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipeShow from "./RecipeShow";
import { getRecipes } from "../../../actions";
import "../../../index";

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  recipeSelect = () => {};

  render() {
    return (
      <div>
        <RecipeList
          recipes={this.props.recipes}
          recipeSelect={this.recipeSelect}
        />
        <RecipeShow
        //recipes={this.state.recipes}
        //selectedRecipe={this.state.selected_recipe}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { recipes: Object.values(state.recipes) };
};

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeIndex);
