import React from "react";
import { Link } from "react-router-dom";
import "../../../index";

class RecipeShow extends React.Component {
  componentDidMount() {}

  listTitle = () => {
    if (this.props.selectedRecipe) {
      return <div>{this.props.selectedRecipe.title}</div>;
    }
  };

  listIngredients = () => {
    if (this.props.selectedRecipe) {
      return this.props.selectedRecipe.ingredients.map((ingredient, i) => {
        return <li key={i}>{ingredient}</li>;
      });
    }
  };

  listDirections = () => {
    if (this.props.selectedRecipe) {
      return this.props.selectedRecipe.directions.map((direction, i) => {
        return <li key={i}>{direction}</li>;
      });
    }
  };

  newRecipe = () => {
    return (
      <h2 id="recipe-add">
        <Link to="/recipes/new">
          <i className="fas fa-plus"></i>
        </Link>
      </h2>
    );
  };

  render() {
    if (this.props.selectedRecipe) {
      return (
        <div id="recipe-desc" className="ui container">
          <div id="recipe-title">
            <h2>{this.listTitle()}</h2>
            <Link to={`/recipes/edit/${this.props.selectedRecipe.id}`}>
              <i className="fas fa-edit"></i>
            </Link>
            <Link to={`/recipes/delete/${this.props.selectedRecipe.id}`}>
              <i className="far fa-trash-alt"></i>
            </Link>
          </div>
          <div id="recipe-body">
            <ul>{this.listIngredients()}</ul>
            <ol>{this.listDirections()}</ol>
          </div>
          {this.newRecipe()}
        </div>
      );
    } else {
      return (
        <div className="ui container">
          {this.newRecipe()}
        </div>
      );
    }
  }
}

export default RecipeShow;

// DRY up the code (refactor functions)
