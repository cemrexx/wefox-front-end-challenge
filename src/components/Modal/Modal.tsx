import React, { useEffect } from "react";

import './styles.css';

const Modal = (props:any) => {
  const closeOnEscapeKeyDown = (e: KeyboardEvent) =>{
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return (
 
      <div className={`modal ${props.show ? 'show' : ''}` } onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
         
        </div>
      </div>

   
  );
};

export default Modal;
