import React from "react";
import "./Modal.css";

const Modal = ({ openModal, closeModal, children }) => {
  return (
    <div className={openModal ? "Modal-wrapper" : "Modal-hidden"}>
      <div className="Modal-content">
        {children}
      </div>
      <div className="Modal-close" onClick={() => closeModal()}>X</div>
    </div>
  );
};

export default Modal;
