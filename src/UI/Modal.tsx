import React from "react";
import { createPortal } from "react-dom";

const Backdrop = () => {
  return <div className="w-full h-full inset-0 fixed bg-backdrop z-0"></div>;
};
const ModalOverlay: React.FC<{ children: JSX.Element }> = (props) => {
  return <div className="z-10 fixed inset-0">{props.children}</div>;
};
const Modal: React.FC<{ children: JSX.Element }> = (props) => {
  const portalElement = document.getElementById("overlays") || document.body;

  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
