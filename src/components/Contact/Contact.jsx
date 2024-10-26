import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
    //console.log(formvalue);
  };
  const handleFormsubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://upskilling-egypt.com:3001/contact",
      formvalue
    );
    console.log("success");
  };
  return (
    <div className="contact">
      <div className="container">
        <h2 className="custom-h2 py-5">Contact Us</h2>
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-4 col-12 align-items-center  contact-inputs">
              <form onSubmit={handleFormsubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formvalue.name}
                  onChange={handleInput}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formvalue.email}
                  onChange={handleInput}
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  value={formvalue.phone}
                  onChange={handleInput}
                />
                <button type="submit">Send</button>
              </form>
            </div>
            <div className="col-lg-7 col-12 mt-5">
              <div>
                <span>
                  <i class="fa-regular fa-envelope px-3"></i>
                  upskilling.eg1@gmail.com
                </span>
              </div>
              <div className="mt-4">
                <span>
                  <i class="fa-solid fa-phone px-3 pb-5"></i>{" "}
                  upskilling.eg1@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Contact;
