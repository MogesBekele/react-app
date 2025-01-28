import React, { useState, useEffect } from "react";

const CreateTrip = () => {
  const [place, setPlace] = useState("");

  useEffect(() => {
    console.log("Place:", place);
  }, [place]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="text-3xl font-bold">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl font-bold">
            What is your destination of choice?
          </h2>
          <input
            type="text"
            className="border-2 border-gray-300 w-full p-2 mt-2"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">
            how many days are you planninig to trip
          </h2>
          <input
            type="number"
            placeholder="No."
            className="border-2 border-gray-300 w-full p-2 mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
