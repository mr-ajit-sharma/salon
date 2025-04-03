import React, { useState } from "react";
import { Link } from "react-router-dom";
import appointement from "../assets/contact.jpg";
import { ScheduleOne, ScheduleTwo } from "./Schedule";
import FirstSelection from "./FirstSelection";
import SecondSelection from "./SecondSelection";
import ThirdSelection from "./ThirdSelection";
import FourthSelection from "./FourthSelection";

const selections = [
  { id: 0, name: "Service Selection", icon: "shopping-bag", component: <FirstSelection /> },
  { id: 1, name: "Date-Time", icon: "timer", component: <SecondSelection /> },
  { id: 2, name: "Your Information", icon: "info-circle", component: <ThirdSelection /> },
  { id: 3, name: "Payments", icon: "wallet-alt", component: <FourthSelection /> },
];

const Appointement = () => {
  const [activeSelection, setActiveSelection] = useState(0);
  

  return (
    <div className="contact-container">
      {/* Appointment Header */}
      <div className="first contact-first">
        <div className="contact-img-container">
          <img src={appointement} alt="Appointment" className="contact-img" />
        </div>
        <div className="contact-data">
          <h1>Book an Appointment</h1>
        </div>
      </div>

      {/* Selection Process */}
      <div className="second">
        <div className="second-first">
          <div className="second-first-first">
            <form>
              {selections.map(({ id, name, icon }) => (
                <Link 
                  key={id} 
                  to={`/appointement/${id}`} 
                  className="service-item"
                  onClick={() => setActiveSelection(id)}
                >
                  <div>
                    <box-icon name={icon} color="#6e09a8" animation="fade-left" rotate="180" type="solid"></box-icon>
                  </div>
                  <div>
                    <h3>{name}</h3>
                  </div>
                  <input type="checkbox" checked={activeSelection === id} readOnly />
                </Link>
              ))}
            </form>
          </div>
          
          {/* Render Active Selection Component */}
          <div className="selection-content">
            {selections[activeSelection].component}
          </div>
        </div>

        {/* Schedule Information */}
        <div className="second-second">
          <div className="anti-location-container">
            <div className="location">
              <p>Branch-1</p>
            </div>
            <div className="anti-location-content">
              <ScheduleOne />
            </div>
          </div>
          <div className="anti-location-container">
            <div className="location">
              <p>Branch-2</p>
            </div>
            <div className="anti-location-content">
              <ScheduleTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointement;