import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://upskilling-egypt.com:3001/contact", data)
      .then((res) => console.log(res.data));
  };
  const handle = (e) => {
    let newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };
  return (
    <div className="contact">
      <div className="container">
        <h2 className="custom-h2 py-5">Contact Us</h2>
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-4 col-12 align-items-center  contact-inputs">
              <form onSubmit={submit}>
                <input
                  onChange={handle}
                  name="name"
                  value={data.name}
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={handle}
                  name="email"
                  value={data.email}
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={handle}
                  name="phone"
                  value={data.phone}
                  type="text"
                  placeholder="Phone"
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
