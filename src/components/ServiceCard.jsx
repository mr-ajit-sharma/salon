import React from "react";
// import hair from "../assets/intro5.jpg";

const ServiceCard = ({ item, index }) => {
  return (
    <div className="service-card" key={index}>
      <div className="service-img">
        <img src={item.image} width={200} alt="hair pic" />
        <h1>{item.title}</h1>
      </div>
      <div hidden className="service-data">
        <div>
          <p>{item.title}</p>
        </div>
        <div>
          <button>Male</button>
          <button>Female</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
