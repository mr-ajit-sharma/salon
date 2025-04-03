import React, { useState } from "react";

const FirstSelection = ({ onNext }) => {
  const [selectedService, setSelectedService] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService && category) {
      onNext(); // Call the function to move to the next step
    } else {
      alert("Please select a service and category");
    }
  };

  return (
    <div className="first-selection-container p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Your Service</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-medium">
          Choose a Service:
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="block w-full p-2 border rounded-md mt-1"
          >
            <option value="">Select...</option>
            <option value="Haircut">Haircut</option>
            <option value="Massage">Massage</option>
            <option value="Consultation">Consultation</option>
          </select>
        </label>

        <label className="font-medium">
          Choose a Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full p-2 border rounded-md mt-1"
          >
            <option value="">Select...</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="Luxury">Luxury</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default FirstSelection;