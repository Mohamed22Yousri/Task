import React from "react";
import "./About.css";
import jpg1 from "../Assets/Vector 8.png";
import jpg2 from "../Assets/Rectangle 263.png";

const About = () => {
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col-lg-3  d-flex justify-content-end"
            style={{ marginTop: "10px" }}
          >
            <div className="text-white text-center position-absolute about-text ">
              <h2>About Us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an{" "}
              </p>
              <div className="text-start">
                <img src={jpg2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-9   justify-content-end d-flex img">
            <img
              style={{ height: "554px" }}
              className="w-75 position-relative"
              src={jpg1}
              alt=""
            />
            <div className="position-absolute about-sec2 text-white">
              <div>
                <h2>Where</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and <span>more recently with desktop publishing software</span> 
                </p>
              </div>
            </div>
            
          </div>
          <div className="position-absolute about-button">
            <button className="custom-button">Help ME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
