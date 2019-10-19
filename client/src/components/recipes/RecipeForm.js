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

  renderHobbies = ({ fields, meta: { error } }) => {
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push()}>
            Add Hobby
          </button>
        </li>
        {fields.map((hobby, index) => (
          <li key={index}>
            <button
              type="button"
              title="Remove Hobby"
              onClick={() => fields.remove(index)}
            />
            <Field
              name={hobby}
              type="text"
              component={this.renderField()}
              label={`Hobby #${index + 1}`}
            />
          </li>
        ))}
        {error && <li className="error">{error}</li>}
      </ul>
    );
  };

  renderMembers = ({ fields, meta: { error, submitFailed } }) => {
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>
            Add Member
          </button>
          {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((member, index) => (
          <li key={index}>
            <button
              type="button"
              title="Remove Member"
              onClick={() => fields.remove(index)}
            />
            <h4>Member #{index + 1}</h4>
            <Field
              name={`${member}.firstName`}
              type="text"
              component={this.renderField()}
              label="First Name"
            />
            <Field
              name={`${member}.lastName`}
              type="text"
              component={this.renderField()}
              label="Last Name"
            />
            <FieldArray name={`${member}.hobbies`} component={this.renderHobbies()} />
          </li>
        ))}
      </ul>
    );
  };

  FieldArraysForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="clubName"
          type="text"
          component={this.renderField()}
          label="Club Name"
        />
        <FieldArray name="members" component={this.renderMembers()} />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  };

  render() {
    return (
      <form>
        <Field name="title" component={this.renderField} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.clubName) {
    errors.clubName = "Required";
  }
  if (!values.members || !values.members.length) {
    errors.members = { _error: "At least one member must be entered" };
  } else {
    const membersArrayErrors = [];
    values.members.forEach((member, memberIndex) => {
      const memberErrors = {};
      if (!member || !member.firstName) {
        memberErrors.firstName = "Required";
        membersArrayErrors[memberIndex] = memberErrors;
      }
      if (!member || !member.lastName) {
        memberErrors.lastName = "Required";
        membersArrayErrors[memberIndex] = memberErrors;
      }
      if (member && member.hobbies && member.hobbies.length) {
        const hobbyArrayErrors = [];
        member.hobbies.forEach((hobby, hobbyIndex) => {
          if (!hobby || !hobby.length) {
            hobbyArrayErrors[hobbyIndex] = "Required";
          }
        });
        if (hobbyArrayErrors.length) {
          memberErrors.hobbies = hobbyArrayErrors;
          membersArrayErrors[memberIndex] = memberErrors;
        }
        if (member.hobbies.length > 5) {
          if (!memberErrors.hobbies) {
            memberErrors.hobbies = [];
          }
          memberErrors.hobbies._error = "No more than five hobbies allowed";
          membersArrayErrors[memberIndex] = memberErrors;
        }
      }
    });
    if (membersArrayErrors.length) {
      errors.members = membersArrayErrors;
    }
  }
  return errors;
};

export default reduxForm({
  form: "recipeForm",
  validate
})(RecipeForm);
