import React from "react";
import "../index.css";

class RecipeSelect extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.title}</li>
      </div>
    );
  }
}

export default RecipeSelect;
