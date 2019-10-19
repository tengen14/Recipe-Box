import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Hello</div>
        <div className="content">lorem ipsum</div>
        <div className="actions">yes no</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
