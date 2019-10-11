import React from "react";

class RecipeDesc extends React.Component {
  state = { selectedRecipe: {} };
  
  // Set default selectedRecipe to Macaroni & Cheese
  componentDidMount() {
    this.setState({ selectedRecipe : {
      title: this.props.recipes[0].title,
      ingredients: this.props.recipes[0].ingredients,
      directions: this.props.recipes[0].directions
    } });
  }

  render() {
    const title = this.state.selectedRecipe.title;
    const ingredients = this.state.selectedRecipe.ingredients;
    const directions = this.state.selectedRecipe.directions;

    return (
      <div id="recipe-desc" className="container">
        <h2 id="recipe-title">{title}</h2>
        <div id="recipe-body" className="overflow-auto">
          <h3>{ingredients}</h3>
          <p>{directions}</p>
        </div>
        <h2 id="recipe-add">Recipe Add</h2>
      </div>
    );
  }
}

export default RecipeDesc;
