import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../actions";
import RecipeForm from "./RecipeForm";
import Modal from "../Modal";

class RecipeCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createRecipe(formValues);
  };

  render() {
    return (
      <div>
        Recipe Create
        <RecipeForm onSubmit={this.onSubmit} />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default connect(
  null,
  { createRecipe }
)(RecipeCreate);
