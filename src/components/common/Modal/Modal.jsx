import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

const Modal = ({ width, height, isOpen,children }) => {
  const dynamicStyle = {
    width,
    height,
  };

  return (
    isOpen && (
      <div className={`modalWrapper`}>
        <div className="modalBody" style={dynamicStyle}>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;

Modal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  width: "50%",
  height: "auto",
  isOpen: false,
};
