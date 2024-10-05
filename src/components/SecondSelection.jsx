import React from "react";

const SecondSelection = () => {
  return (
    <div className="second-first-second">
      <div className="service-one">
        <h3>Date-selection</h3>
      </div>
      <div className="service-two">
        <div className="service-two-services">
          <label htmlFor="" defaultChecked aria-required>
            Service
          </label>
          <select name="" id="" required>
            <option value="">Select Service</option>
            <option value="">Hair</option>
            <option value="">Color</option>
            <option value="">Beard</option>
            <option value="">Treatment</option>
          </select>
        </div>
        <div className="service-two-services">
          <label htmlFor="">Employee</label>
          <select name="" id="">
            <option value="">Select Employee</option>
            <option value="">Amit"Lalu"</option>
            <option value="">Ajit"Raja"</option>
            <option value="">Manchu</option>
            <option value="">Rahul</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SecondSelection;
