import React from "react";
import "./styles.css";

const Header = ({ handleLogOut }) => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <a href="/todo">Todo</a>
      </div>
      <div className="header" onClick={handleLogOut}>
        Log out
      </div>
    </div>
  );
};

export default Header;
