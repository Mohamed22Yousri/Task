import React from "react";
import hero from "../Assets/Vector 7.png";
import logo from "../Assets/Group 560.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero mb-5">
      <div className="d-flex position-relative">
        <img className="w-100" src={hero} alt="" />
      </div>
      <div className="container">
        <div className="hero-text position-absolute">
          <div>
            <img className="w-100" src={logo} alt="" />
          </div>
          <div className="hero-btn" style={{ marginTop: "140px" }}>
            <button className="btn-1">Experts</button>
            <p className="p1">Lorem</p>
          <h2>Lorem lorem</h2>
          <p className="p2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn-2 custom-button">Help Me</button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
