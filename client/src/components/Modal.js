import React from "react";
import ReactDOM from "react-dom";
import RecipeForm from '../components/recipes/RecipeForm';
import history from '../history';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div 
    onClick={() => history.goBack()}
    className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">
          <RecipeForm 
            newSubmission={props.newSubmit}
          />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;