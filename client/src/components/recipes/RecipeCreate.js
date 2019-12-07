import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../actions";
import Modal from "../Modal";

class RecipeCreate extends React.Component {
  // onSubmit is passed down as prop to Modal.js then RecipeForm.js
  // formValues is equal to the field values when data is submitted in RecipeForm.js
  onSubmit = formValues => {
    this.props.createRecipe(formValues);
  };

  render() {
    return (
      <div>
        <Modal
          type="Add"
          onSubmit={this.onSubmit} 
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createRecipe }
)(RecipeCreate);
