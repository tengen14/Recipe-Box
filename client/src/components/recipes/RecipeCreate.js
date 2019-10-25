import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../actions";
import Modal from "../Modal";

class RecipeCreate extends React.Component {
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
