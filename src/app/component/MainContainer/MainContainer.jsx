import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const MainContainer = ({ children }) => {
  return <div className="main">{children}</div>;
};

MainContainer.defaultProps = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
