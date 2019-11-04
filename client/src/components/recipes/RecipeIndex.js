import React from "react";
import { connect } from "react-redux";
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
        <h1>
          Recipe Box <i className="fas fa-hamburger"></i>
        </h1>
        <RecipeList recipes={this.props.recipes} />
        <RecipeShow selectedRecipe={this.props.selectedRecipe} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: Object.values(state.recipes),
    selectedRecipe: state.recipes[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeIndex);
