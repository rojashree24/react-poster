import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt=""  />
    </div>
  );
};

export default Navbar;
