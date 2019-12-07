import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import { getRecipe, editRecipe } from "../../actions";
import Modal from "../Modal";

class RecipeEdit extends React.Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  // onSubmit is passed down as prop to Modal.js then RecipeForm.js
  // formValues is equal to the field values when data is submitted in RecipeForm.js
  onSubmit = formValues => {
    this.props.editRecipe(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <Modal 
          type="Edit" 
          // 'pick' desired data from selected recipe to fill formValues
          initialValues={_.pick(this.props.selectedRecipe, "title", "ingredients", "directions")}
          onSubmit={this.onSubmit} 
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedRecipe: state.recipes[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { getRecipe, editRecipe }
)(RecipeEdit);
