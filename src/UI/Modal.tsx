import React from "react";
import { createPortal } from "react-dom";
import Card from "./Card";

const Backdrop = () => {
  return (
    <div className="w-full h-full inset-0 fixed background-color-backdrop"></div>
  );
};
const ModalOverlay: React.FC<{ children: JSX.Element }> = (props) => {
  return <Card>{props.children}</Card>;
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
