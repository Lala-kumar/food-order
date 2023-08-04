import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop onHideCart={props.onHideCart} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>,
    document.getElementById("overlays")
  );
};

export default Modal;
