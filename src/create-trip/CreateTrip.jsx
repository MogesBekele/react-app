import React, { useState, useEffect } from "react";
import { selectTravelOptions, selectBudgetOptions } from "../constant/options";

const CreateTrip = () => {
  const [place, setPlace] = useState("");

  useEffect(() => {
    console.log("Place:", place);
  }, [place]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="text-3xl font-bold">Tell us your travel preferences 🗺️</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl font-bold">What is your destination of choice? 🌍</h2>
          <input
            type="text"
            className="border-2 border-gray-300 w-full p-2 mt-2"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">How many days are you planning to trip? 📅</h2>
          <input
            type="number"
            placeholder="No."
            className="border-2 border-gray-300 w-full p-2 mt-2"
          />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold">What is your budget? 💰</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {selectBudgetOptions.map((item, index) => (
            <div key={index} className="p-5 border-2 border-gray-300 cursor-pointer rounded-lg hover:border-blue-200">
              <h2 className="text-2xl">{item.icons}</h2>
              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <h3 className="text-sm text-gray-500">{item.desc}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold">Who do you plan for next adventures? 👥</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {selectTravelOptions.map((item, index) => (
            <div key={index} className="p-5 border-2 border-gray-300 cursor-pointer rounded-lg hover:border-blue-200">
              <h2 className="text-2xl">{item.icons}</h2>
              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <h3 className="text-sm text-gray-500">{item.desc}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 mb-10 flex justify-center md:justify-end">
        <button className="bg-gray-950 text-white cursor-pointer px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition-colors">
          Generate Trip
        </button>
      </div>
    </div>
  );
};

export default CreateTrip;
