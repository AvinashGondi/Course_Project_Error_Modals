import React from "react";
import ReactDom from "react-dom";

import "./InvalidCard.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};

const ErrorModal = (props) => {
  return (
    <div className="card">
      <div className="card__invalid">{props.title}</div>
      <h3>{props.message}</h3>
      <footer>
        <button onClick={props.onConfirm}>OK</button>
      </footer>
    </div>
  );
};

const InvalidCard = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ErrorModal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("error-modal-root")
      )}
    </>
  );
};

export default InvalidCard;
