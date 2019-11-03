import React from "react";
import { connect } from "react-redux";
import { getRecipe, createRecipe } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class RecipeCreate extends React.Component {
  componentWillUnmount() {
    history.push("/");
  }

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
  { getRecipe, createRecipe }
)(RecipeCreate);
