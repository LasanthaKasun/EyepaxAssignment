import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = ({ label, handleClick }) => {
  return (
    <div className="btn-wrapper" onClick={handleClick}>
      {label}
    </div>
  );
};

Button.defaultProps = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
