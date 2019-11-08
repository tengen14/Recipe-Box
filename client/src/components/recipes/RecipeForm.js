import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import history from "../../history";

class RecipeForm extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    const titleMaxCharLength = () => {
      const titleForm = document.querySelector("input[name='title']");
      console.log(titleForm);
      if (titleForm !== null) {
        titleForm.setAttribute("maxlength", "20");
      }
    };
    titleMaxCharLength();
    return (
      <React.Fragment>
        <label>{label}</label>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </React.Fragment>
    );
  };

  renderTextArea = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <React.Fragment>
        <label>{label}</label>
        <textarea
          {...input}
          type={type}
          placeholder={label}
          rows="10"
          cols="40"
        />
        {touched && error && <span>{error}</span>}
      </React.Fragment>
    );
  };

  renderIngredients = ({ fields, meta: { error } }) => {
    return (
      <ul className="custom-field-array-container">
        {fields.map((ingredient, index) => (
          <li key={index} className="ingredient-form-value field-array-item">
            <Field
              name={ingredient}
              type="text"
              component={this.renderField}
              label={`Ingredient #${index + 1}`}
            />
            <i
              title="Remove Ingredient"
              onClick={() => fields.remove(index)}
              className="fas fa-trash-alt"
            ></i>
          </li>
        ))}
        <div className="add-buttons">
          <li>
            <button type="button" onClick={() => fields.push()}>
              Add {!fields.length ? "Ingredient(s)" : "Another Ingredient"}
            </button>
          </li>
          {error && <li className="error">{error}</li>}
        </div>
      </ul>
    );
  };

  renderDirections = ({ fields, meta: { error } }) => {
    return (
      <ul className="custom-field-array-container">
        {fields.map((direction, index) => (
          <li key={index} className="direction-form-value field-array-item">
            <Field
              name={direction}
              type="text"
              component={this.renderTextArea}
              label={`Direction #${index + 1}`}
            />
            <div
              id="direction-delete-button"
              onClick={() => fields.remove(index)}
              title="Remove Direction"
            >
              <i className="fas fa-trash-alt"></i>
              <span>Delete</span>
            </div>
          </li>
        ))}
        <div className="add-buttons">
          <li>
            <button type="button" onClick={() => fields.push()}>
              Add {!fields.length ? "Direction(s)" : "Another Direction"}
            </button>
          </li>
          {error && <li className="error">{error}</li>}
        </div>
      </ul>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div id="title-form">
            <Field
              name="title"
              component={this.renderField}
              type="text"
              label="Recipe Title"
            />
          </div>
          <FieldArray name="ingredients" component={this.renderIngredients} />
          <hr />
          <FieldArray name="directions" component={this.renderDirections} />
          <div id="form-buttons">
            <button className="ui button primary big">Submit</button>
            <span
              className="ui button negative big"
              onClick={() => history.goBack()}
            >
              Cancel
            </span>
          </div>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "! Required";
  }

  if (!values.ingredients || !values.ingredients.length) {
    errors.ingredients = { _error: "At least one ingredient must be entered" };
  } else {
    const ingredientArrayErrors = [];
    values.ingredients.forEach((ingredient, index) => {
      if (!ingredient || !ingredient.length) {
        ingredientArrayErrors[index] = "! Required";
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
        directionArrayErrors[index] = "! Required";
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
