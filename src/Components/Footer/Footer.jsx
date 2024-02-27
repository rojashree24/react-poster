import React from "react";
import "./Footer.css";
import phone from "../../Assets/phone.png";
import facebook from "../../Assets/facebook.png";
import globe from "../../Assets/globe.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot1">
        <img src={phone} alt="" />
        <p>
          Tool free <b>1800 200 1234</b>{" "}
        </p>
      </div>
      <div className="foot2">
        <img src={facebook} alt="" />
        <p>www.facebook.com/cripumps</p>
      </div>
      <div className="foot3">
        <img src={globe} alt="" />
        <p>www.crigroups.com</p>
      </div>
    </div>
  );
};

export default Footer;
