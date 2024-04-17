// Modal.js

import React from "react";
export interface modalProps {
  openModal: boolean;
  setOpenModal: any;
  callBackFunction?: any;
}

const Modal = ({ children, onClose, open }: any) => {
  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose(); // Call onClose prop to close the modal
    }
  };

  return (
    <div
      onClick={onClose}
      style={{ backgroundColor: "#FFFFFFE5" }}
      className={`${open
        ? "fixed"
        : "hidden"} top-0 left-0 w-full h-full flex z-[999] items-center justify-center  bg-opacity-70 backdrop-blur-sm`}
    >
      {children}
    </div>
  );
};

export default Modal;
