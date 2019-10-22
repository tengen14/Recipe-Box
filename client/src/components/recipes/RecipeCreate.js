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
    console.log(this.props)
    return (
      <div>
        <Modal 
          title="Add Recipe"
          
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createRecipe }
)(RecipeCreate);
