import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const TextField = ({ placeholder, value, type, handleChange }) => {
  return (
    <input
      className="input-wrapper"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
};

TextField.defaultProps = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
