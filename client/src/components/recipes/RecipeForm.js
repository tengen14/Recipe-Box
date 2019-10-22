import React from "react";
import { Field, Fields, FieldArray, reduxForm } from "redux-form";

class RecipeForm extends React.Component {
  // The fields object is a "pseudo-array", in that it has many of the same properties and methods as a javascript Array,
  // providing both reading and writing functionality.

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
              label={`Discount Code #${index + 1}`}
              autoFocus
            />
            <button type="button" onClick={() => fields.remove(index)}>
              &times;
            </button>
          </div>
        ))}
        <button type="button" onClick={() => fields.push()}>
          Add {!fields.length ? "Discount Code(s)" : "Another Discount Code"}
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
          Add {!fields.length ? "Discount Code(s)" : "Another Discount Code"}
        </button>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <label>Recipe Title</label>
          <div>
            <Field
              name="title"
              component={this.renderField}
              type="text"
              placeholder="Recipe Title"
            />
          </div>
        </div>

        <div>
          <FieldArray name="ingredients" component={this.renderIngredients} />
        </div>

        <div>
          <FieldArray name="directions" component={this.renderDirections} />
        </div>

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
  //   validateds
})(RecipeForm);
