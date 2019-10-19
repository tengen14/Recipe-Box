import React from "react";
import { Field, reduxForm } from "redux-form";

class RecipeForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="ingredients"
          component={this.renderInput}
          label="Enter Ingredients"
        />
        <Field
          name="directions"
          component={this.renderInput}
          label="Enter Directions"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.ingredients) {
    errors.ingredients = "You must enter at least 1 ingredient";
  }

  if (!formValues.directions) {
    errors.directions = "You must enter at least 1 direction";
  }
};

export default reduxForm({
  form: "recipeForm",
  validata
})(StreamForm);
