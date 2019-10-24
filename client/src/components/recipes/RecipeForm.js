import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

class RecipeForm extends React.Component {
  renderField = field => {
    return (
      <div className="input-row">
        <input {...field.input} type="text" />
        {field.meta.touched && field.meta.error && (
          <span className="error">{field.meta.error}</span>
        )}
      </div>
    );
  };

  renderIngredients = ({ fields }) => {
    return (
      <div className="custom-field-array-container">
        {fields.map((code, index) => (
          <div key={index} className="field-array-item">
            <Field
              name={code}
              type="text"
              component={this.renderField}
              autoFocus
            />
            <button type="button" onClick={() => fields.remove(index)}>
              &times;
            </button>
          </div>
        ))}
        <button type="button" onClick={() => fields.push()}>
          Add {!fields.length ? "Ingredient(s)" : "Another Ingredient"}
        </button>
      </div>
    );
  };

  renderDirections = ({ fields }) => {
    return (
      <div className="custom-field-array-container">
        {fields.map((code, index) => (
          <div key={index} className="field-array-item">
            <Field
              name={code}
              type="text"
              component={this.renderField}
              label={`Discount Code #${index + 1}`}
              autoFocus
            />
            <button type="button" onClick={() => fields.remove(index)}>
              &times;
            </button>
          </div>
        ))}
        <button type="button" onClick={() => fields.push()}>
          Add {!fields.length ? "Direction(s)" : "Another Direction"}
        </button>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.newSubmit(formValues);
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

// const validate = values => {
//   const errors = {};
//   if (!values.clubName) {
//     errors.clubName = "Required";
//   }
//   if (!values.members || !values.members.length) {
//     errors.members = { _error: "At least one member must be entered" };
//   } else {
//     const membersArrayErrors = [];
//     values.members.forEach((member, memberIndex) => {
//       const memberErrors = {};
//       if (!member || !member.firstName) {
//         memberErrors.firstName = "Required";
//         membersArrayErrors[memberIndex] = memberErrors;
//       }
//       if (!member || !member.lastName) {
//         memberErrors.lastName = "Required";
//         membersArrayErrors[memberIndex] = memberErrors;
//       }
//       if (member && member.hobbies && member.hobbies.length) {
//         const hobbyArrayErrors = [];
//         member.hobbies.forEach((hobby, hobbyIndex) => {
//           if (!hobby || !hobby.length) {
//             hobbyArrayErrors[hobbyIndex] = "Required";
//           }
//         });
//         if (hobbyArrayErrors.length) {
//           memberErrors.hobbies = hobbyArrayErrors;
//           membersArrayErrors[memberIndex] = memberErrors;
//         }
//         if (member.hobbies.length > 5) {
//           if (!memberErrors.hobbies) {
//             memberErrors.hobbies = [];
//           }
//           memberErrors.hobbies._error = "No more than five hobbies allowed";
//           membersArrayErrors[memberIndex] = memberErrors;
//         }
//       }
//     });
//     if (membersArrayErrors.length) {
//       errors.members = membersArrayErrors;
//     }
//   }
//   return errors;
// };

export default reduxForm({
  form: "recipeForm"
  //   validated
})(RecipeForm);

// dry up functions
// validate form
