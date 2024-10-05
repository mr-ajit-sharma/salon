import React, { useState } from "react";
import { Link } from "react-router-dom";
import appointement from "../assets/contact.jpg";
// import Schedule from './Schedule'
import { ScheduleOne, ScheduleTwo } from "./Schedule";
import FirstSelection from "./FirstSelection";
import SecondSelection from "./SecondSelection";
import ThirdSelection from "./ThirdSelection";
import FourthSelection from "./FourthSelection";
const Appointement = () => {
  const [activeSelection, setActiveSelection] = useState(0);
  const handleSelectionChange = (index) => {
    setActiveSelection(index);
  };
  const renderSelectionComponent = () => {
    switch (activeSelection) {
      case 0:
        return <FirstSelection />;
      case 1:
        return <SecondSelection />;
      case 2:
        return <ThirdSelection />;
      case 3:
        return <FourthSelection />;
      default:
        return null;
    }
  };
  return (
    <div className="contact-container">
      <div className="first contact-first">
        <div className="contact-img-container">
          <img src={appointement} alt="" className="contact-img" />
        </div>
        <div className="contact-data">
          <h1>Book an Appointement</h1>
        </div>
      </div>
      <div className="second">
        <div className="second-first">
          <div className="second-first-first">
            <form action="">
              <Link
                to="/first"
                className="service-item"
                onclick={() => handleSelectionChange(0)}
              >
                <div>
                  <box-icon
                    color="#6e09a8"
                    type="solid"
                    animation="fade-left"
                    rotate="180"
                    name="shopping-bag"
                  ></box-icon>
                </div>
                <div>
                  <h3>Service-Selection</h3>
                </div>
                <input
                  type="checkbox"
                  checked={activeSelection === 0}
                  readOnly
                />
              </Link>
              <Link
                to="/second"
                className="service-item"
                onClick={() => handleSelectionChange(1)}
              >
                <div>
                  <box-icon
                    name="timer"
                    color="#6e09a8"
                    animation="fade-left"
                    rotate="180"
                    type="solid"
                  ></box-icon>
                </div>
                <div>
                  <h3>Date-time</h3>
                </div>
                <input
                  checked={activeSelection === 1}
                  type="checkbox"
                  readOnly
                />
              </Link>
              <Link
                to="/third"
                onClick={() => handleSelectionChange(2)}
                className="service-item"
              >
                <div>
                  <box-icon
                    name="info-circle"
                    color="#6e09a8"
                    animation="fade-left"
                    rotate="180"
                    type="solid"
                  ></box-icon>
                </div>
                <div>
                  <h3>Your information</h3>
                </div>
                <input
                  type="checkbox"
                  checked={activeSelection === 2}
                  readOnly
                />
              </Link>
              <Link
                to="/fourth"
                onClick={() => handleSelectionChange(3)}
                className="service-item"
              >
                <div>
                  <box-icon
                    name="wallet-alt"
                    type="solid"
                    color="#6e09a8"
                    animation="fade-left"
                    rotate="180"
                  ></box-icon>
                </div>
                <div>
                  <h3>Payments</h3>
                </div>
                <input
                  checked={activeSelection === 3}
                  readOnly
                  type="checkbox"
                />
              </Link>
            </form>
          </div>
          {renderSelectionComponent()}
        </div>
        <div className="second-second">
          {/* <Schedule /> */}
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
