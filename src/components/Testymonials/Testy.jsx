import React from "react";
import "./Testy.css";
import elli from "../Assets/Ellipse 1.png";
import star from "../Assets/Group 30.png";

const Testy = () => {
  const users = [
    {
      id: 1,
      img: elli,
      name: "Courtney Henry",
      des: ` Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book`,
      starts: star,
    },
    {
        id: 2,
        img: elli,
        name: "Courtney Henry",
        des: ` Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book`,
        starts: star,
      },
      {
        id: 3,
        img: elli,
        name: "Courtney Henry",
        des: ` Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book`,
        starts: star,
      },
      {
        id: 4,
        img: elli,
        name: "Courtney Henry",
        des: ` Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book`,
        starts: star,
      },
  ];
  return (
    <div className="testymonials">
      <div className="container">
        <h2 className="custom-h2 py-4">Testymonials</h2>
        <div className="row">
          {users.map((u) => {
            return (
              <div className="col-md-6 col-12 " key={u.id}>
                <div className="d-flex p-2 testy" style={{ gap: "10px" }}>
                  <div>
                    <img src={u.img} alt="" />
                  </div>
                  <div className="text-start">
                    <h5>{u.name}</h5>
                    <p className="p-0 m-0">{u.des}</p>
                    <div className="p-0 mt-1">
                      <img src={u.starts} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testy;
