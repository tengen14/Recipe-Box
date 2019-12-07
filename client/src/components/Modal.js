import React from "react";
import ReactDOM from "react-dom";
import RecipeForm from "../components/recipes/RecipeForm";
import history from "../history";
import "../styles/form.css";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{`${props.type} Recipe`}</div>
        <div className="content">
          {/* Props inherited and passed down from REST components and further passed down to RecipeForm.js */}
          <RecipeForm
            type={props.type}
            initialValues={props.initialValues}
            onSubmit={props.onSubmit}
          />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
