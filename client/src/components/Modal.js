import React from "react";
import ReactDOM from "react-dom";
import RecipeForm from '../components/recipes/RecipeForm';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content"><RecipeForm /></div>
        <div className="actions">yes no</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
