import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import history from "../../history";

class RecipeForm extends React.Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <React.Fragment>
        <label>{label}</label>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </React.Fragment>
    );
  };

  // renderIngredients = ({ fields, meta: { error } }) => {
  //   return (
  //     <ul className="custom-field-array-container">
  //       <li>
  //         <button type="button" onClick={() => fields.push()}>
  //           Add {!fields.length ? "Ingredient(s)" : "Another Ingredient"}
  //         </button>
  //       </li>
  //       {fields.map((ingredient, index) => (
  //         <li key={index} className="field-array-item">
  //           <button
  //             type="button"
  //             title="Remove Ingredient"
  //             onClick={() => fields.remove(index)}
  //           >
  //             <i class="fas fa-trash-alt"></i>
  //           </button>
  //           <Field
  //             name={ingredient}
  //             type="text"
  //             component={this.renderField}
  //             label={`Ingredient #${index + 1}`}
  //           />
  //         </li>
  //       ))}
  //       {error && <li className="error">{error}</li>}
  //     </ul>
  //   );
  // };

  renderIngredients = ({ fields, meta: { error } }) => {
    return (
      <ul className="custom-field-array-container">
        <li>
          <button type="button" onClick={() => fields.push()}>
            Add {!fields.length ? "Ingredient(s)" : "Another Ingredient"}
          </button>
        </li>
        {fields.map((ingredient, index) => (
          <li
            key={index}
            className="ingredient-form-value field-array-item"
          >
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
        {error && <li className="error">{error}</li>}
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
              id="title-form"
              name="title"
              component={this.renderField}
              type="text"
              label="Recipe Title"
            />
          </div>
          <FieldArray name="ingredients" component={this.renderIngredients} />
          <div id="form-buttons">
            <button className="ui button primary big">Submit</button>
            <button
              className="ui button negative big"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
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
