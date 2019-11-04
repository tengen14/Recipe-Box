import React from "react";
import ReactDOM from "react-dom";
import RecipeForm from "../components/recipes/RecipeForm";
import history from "../history";
import "../form.css";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.goBack()}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{`${props.type} Recipe`}</div>
        <div className="content">
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
