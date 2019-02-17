import React from "react";

const Modal = ({ openModal, closeModal, children }) => {
  return (
    <React.Fragment>
      <div className="Modal-mask" style={openModal ? {display:'block'}:{display:'none'}}/>
      <div className={openModal ? "Modal-wrapper" : "Modal-hidden"}>
        <div className="Modal-content">
          {children}
        </div>
        <div className="Modal-close" onClick={() => closeModal()}>X</div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
