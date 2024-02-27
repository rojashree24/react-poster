import React from "react";
import "./Tools.css";
import img3 from "../../Assets/3.png";

const Tools = () => {
  return (
    <>
      <div className="tools">
        <img src={img3} alt="" className="image1" />
      </div>
      <div className="info">
        <p style={{ fontSize: "11px", marginLeft: "386px", marginTop: "23px" }}>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr  />
      </div>
    </>
  );
};

export default Tools;
