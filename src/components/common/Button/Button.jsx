import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

export const Button = ({label, onClick, className}) => {

    return (
        <div className={`btn ${className}`} onClick={onClick}>
            {label}
        </div>
    )
}

export default Button;

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className:PropTypes.string
};

Button.defaultProps = {
    onClick: undefined,
};


