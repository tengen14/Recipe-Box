import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

class RecipeForm extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
  };

  renderIngredients = ({ fields, meta: { error } }) => {
    return (
      <ul className="custom-field-array-container">
        <li>
          <button type="button" onClick={() => fields.push()}>
            Add {!fields.length ? "Ingredient(s)" : "Another Ingredient"}
          </button>
        </li>
        {fields.map((ingredient, index) => (
          <li key={index} className="field-array-item">
            <button
              type="button"
              title="Remove Ingredient"
              onClick={() => fields.remove(index)}
            >
              &times;
            </button>
            <Field
              name={ingredient}
              type="text"
              component={this.renderField}
              label={`Ingredient #${index + 1}`}
              require
            />
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );
  };

  renderDirections = ({ fields, meta: { error } }) => {
    return (
      <ul className="custom-field-array-container">
        <li>
          <button type="button" onClick={() => fields.push()}>
            Add {!fields.length ? "Direction(s)" : "Another Direction"}
          </button>
        </li>
        {fields.map((direction, index) => (
          <li key={index} className="field-array-item">
            <button
              type="button"
              title="Remove Direction"
              onClick={() => fields.remove(index)}
            >
              &times;
            </button>
            <Field
              name={direction}
              type="text"
              component={this.renderField}
              label={`Direction #${index + 1}`}
              require
            />
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <label>Recipe Title</label>
        <Field
          name="title"
          component={this.renderField}
          type="text"
          placeholder="Recipe Title"
        />
        <FieldArray name="ingredients" component={this.renderIngredients} />
        <FieldArray name="directions" component={this.renderDirections} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.ingredients || !values.ingredients.length) {
    errors.ingredients = { _error: "At least one ingredient must be entered" };
  } else {
    const ingredientArrayErrors = [];
    values.ingredients.forEach((ingredient, index) => {
      if (!ingredient || !ingredient.length) {
        ingredientArrayErrors[index] = "Required";
      }
    });
    if (ingredientArrayErrors.length) {
      errors.ingredients = ingredientArrayErrors;
    }
  }

  if (!values.directions || !values.directions.length) {
    errors.directions = { _error: "At least one direction must be entered" };
  } else {
    const directionArrayErrors = [];
    values.directions.forEach((direction, index) => {
      if (!direction || !direction.length) {
        directionArrayErrors[index] = "Required";
      }
    });
    if (directionArrayErrors.length) {
      errors.directions = directionArrayErrors;
    }
  }

  return errors;
};

export default reduxForm({
  form: "recipeForm",
  validate
})(RecipeForm);

// dry up functions

