import React from "react";
import ServiceCards from "../components/ServiceCards";
import contact from "../assets/contact.jpg";
import Pricing from "../components/Pricing";
const Service = () => {
  return (
    <div className="contact-container">
      <div className="contact-first">
        <div className="contact-img-container">
          <img src={contact} alt="contact pic" className="contact-img" />
        </div>
        <div className="contact-data">
          <h1>Service</h1>

          <p>
            Here you can find answers on frequently asked questions. If you
            cannot find the answer, feel free to contact us via email or
            phone.We would love hearing from you and moreover meeting you in
            person. Below you can find all contact details. See you soon!
          </p>
        </div>
      </div>
      <ServiceCards />
      <Pricing />
    </div>
  );
};

export default Service;
