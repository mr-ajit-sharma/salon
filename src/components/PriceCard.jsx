import React, { useEffect, useState } from "react";

const PriceCard = ({ item, index }) => {
  const [title, setTitle] = useState(item.title);
  const [services, setServices] = useState(item.data);
  useEffect(() => {
    setTitle(title.toUpperCase());
    const updateServices = services.map((service) => ({
      ...service,
      name: service.name.toUpperCase(),
    }));

    setServices(updateServices);
  }, []);
  return (
    <div key={index} className="pricecard">
      <h3>{title}</h3>
      <div className="service-container">
        {services &&
          services.map((service, index) => (
            <div className="service" key={index}>
              <p className="name">{service.name}</p>
              <p className="price">{service.price} &#8377;</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PriceCard;
