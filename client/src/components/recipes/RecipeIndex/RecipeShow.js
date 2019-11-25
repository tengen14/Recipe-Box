import React from "react";
import { Link } from "react-router-dom";
import "../../../index";

class RecipeShow extends React.Component {
  newRecipe = () => {
    return (
      <h2 id="recipe-add">
        <Link to="/recipes/new" title="Add Recipe">
          <i className="fas fa-plus"></i>
        </Link>
      </h2>
    );
  };

  render() {
    const styleVanillaAddRecipe = {
      borderBottom: '2px solid black',
      borderRight: '2px solid black',
      borderLeft: '2px solid black',
      borderBottomRightRadius: '10.1px',
      borderBottomLeftRadius: '10.1px'
  }

    const selectedRecipe = this.props.selectedRecipe;
    const valuesObject = {};
  

    if (selectedRecipe) {
      valuesObject.title = <React.Fragment>{selectedRecipe.title}</React.Fragment>;
      valuesObject.ingredients = selectedRecipe.ingredients.map((ingredient, i) => {
        return <li key={i}>{ingredient}</li>;
      });
      valuesObject.directions = selectedRecipe.directions.map((direction, i) => {
        return <li key={i}>{direction}</li>;
      });

      return (
        <div id="recipe-desc" className="ui container">
          <div id="recipe-title">
            <h2>{valuesObject.title}</h2>
            <div id="title-buttons">
              <Link to={`/recipes/edit/${this.props.selectedRecipe.id}`} title="Edit Recipe">
                <i className="fas fa-edit"></i>
              </Link>
              <Link to={`/recipes/delete/${this.props.selectedRecipe.id}`} title="Delete Recipe">
                <i className="far fa-trash-alt"></i>
              </Link>
            </div>
          </div>
          <div id="recipe-body">
            <ul>{valuesObject.ingredients}</ul>
            <ol>{valuesObject.directions}</ol>
          </div>
          {this.newRecipe()}
        </div>
      );
    } else {
      return (
        <div className="ui container" style={styleVanillaAddRecipe}>
          {this.newRecipe()}
        </div>
      );
    }
  }
}

export default RecipeShow;

