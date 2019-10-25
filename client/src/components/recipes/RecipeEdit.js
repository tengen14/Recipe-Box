import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import { getRecipe, editRecipe } from "../../actions";
import Modal from "../Modal";

class RecipeEdit extends React.Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editRecipe(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <Modal 
          type="Edit" 
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
