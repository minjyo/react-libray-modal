import ReactDOM from "react-dom";
import React from "react";

type Children = React.ReactNode;

const ModalPortal: React.FC<Children> = ({ children }) => {
    const el = document.getElementById("modal");
    return el && ReactDOM.createPortal(children, el);
};

export default ModalPortal;
