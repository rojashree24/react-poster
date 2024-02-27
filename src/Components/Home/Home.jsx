import React from "react";
import "./Home.css";
import img1 from "../../Assets/1.png";
import img2 from "../../Assets/2.png";

const Home = () => {
  return (
    <>
      <div className="cont">
        <div className="cont1">
          <img src={img1} alt="" />
        </div>
        <div className="cont2">
          <b style={{ fontSize: "11px", marginLeft: "10px" }}>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </b>
          <ul style={{ fontSize: "11px" }}>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for <br />{" "}
              various projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the <br />{" "}
              old inefficient pumps with 5 Star rated energy efficient smart
              pumps with IoT enabled control panel.
            </li>
          </ul>
          <img src={img2} alt="" className="image" />
          <p style={{ fontSize: "11px", marginLeft: "10px" }}>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director <br /> of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable <br /> Minister of State.
          </p>
        </div>
      </div>
      <div className="contt">
        <p style={{ fontSize: "11px", marginLeft: "135px" }}>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
      </div>
    </>
  );
};

export default Home;
