import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeList from "./RecipeIndex/RecipeList";
import RecipeShow from "./RecipeIndex/RecipeShow";
import { getRecipes } from "../../actions";
import "../../index";

class RecipeIndex extends React.Component {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    return (
      <div>
        <RecipeList recipes={this.props.recipes} />
        <RecipeShow selectedRecipe={this.props.selected_recipe} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: Object.values(state.recipes),
    selected_recipe: state.recipes[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeIndex);
