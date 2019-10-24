import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../actions";
import Modal from "../Modal";

class RecipeCreate extends React.Component {
  newSubmission = formValues => {
    this.props.createRecipe(formValues);
  };

  render() {
    return (
      <div>
        <Modal title="Add Recipe" newSubmission={this.newSubmission} />
      </div>
    );
  }
}

export default connect(
  null,
  { createRecipe }
)(RecipeCreate);
