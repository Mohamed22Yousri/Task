import React from "react";
import "./Services.css";
import Rectangle1 from "../Assets/Rectangle 250 (2).png";
import Rectangle2 from "../Assets/Rectangle 250 (1).png";
import Rectangle3 from "../Assets/Rectangle 250@2x.png";

const Services = () => {
  const data = [
    {
      id: 1,
      img: Rectangle1,
      name: "Lorem Ipsum",
      des: ` Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled`,
    },
    {
      id: 2,
      img: Rectangle2,
      name: "Lorem Ipsum",
      des: ` Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled`,
    },
    {
      id: 3,
      img: Rectangle3,
      name: "Lorem Ipsum",
      des: ` Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled`,
    },
  ];
  return (
    <div className="services">
      <div className="container">
          <h2 className="custom-h2">Services</h2>
        <div className="row">
          {data.map((e) => {
            return (
              <div className="col-md-4 col-sm-6 col-12" key={e.id}>
                <div className="py-3 services-text">
                  <img className="w-100" src={e.img} alt="" />
                  <div className="shadow p-3 mb-5 bg-body-tertiary rounded text-start">
                    <h5 className="pt-2 pb-1">{e.name}</h5>
                    <p>{e.des}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
            <div className="col-12">
                <button className="mb-5 custom-button">Help Me</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
