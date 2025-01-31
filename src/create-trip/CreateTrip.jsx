import React, { useState, useEffect } from "react";
import { selectTravelOptions, selectBudgetOptions } from "../constant/options";
import generateTripLocation from "../service/aiModel";
import { Link } from "react-router-dom";

const CreateTrip = () => {
  const [place, setPlace] = useState("");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [generatedLocation, setGeneratedLocation] = useState("");
  const [hotelImages, setHotelImages] = useState([]); // Initialize as an empty array

  const formHandler = (name, value) => {
    if (name === 'days' && Number(value) < 5) {
      console.log('Please enter a valid number of days');
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async () => {
    const { days, budget, travelGroup, location } = formData;
    if (!days || !budget || !travelGroup || !location) {
      alert('Please fill all the fields');
      return;
    }

    setLoading(true);
    try {
      const { tripLocation, hotelImages } = await generateTripLocation(location, days, budget, travelGroup);
      setGeneratedLocation(tripLocation);
      setHotelImages(hotelImages); // Set hotel images
      console.log('Form submitted successfully:', { formData, tripLocation });
      alert('Form submitted successfully');
    } catch (error) {
      console.error("Error generating trip location:", error);
      alert('Failed to generate trip location');
    } finally {
      setLoading(false);
    }
  };

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
            onChange={(e) => {
              setPlace(e.target.value);
              formHandler('location', e.target.value);
            }}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">How many days are you planning to trip? 📅</h2>
          <input
            type="number"
            placeholder="No."
            className="border-2 border-gray-300 w-full p-2 mt-2"
            onChange={(e) => formHandler('days', e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold">What is your budget? 💰</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {selectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className={`p-5 border-2 cursor-pointer rounded-lg hover:border-blue-200 ${
                formData.budget === item.title ? 'bg-blue-100 border-blue-200' : 'border-gray-300'
              }`}
              onClick={() => formHandler('budget', item.title)}
            >
              <h2 className="text-4xl">{item.icons}</h2>
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
            <div
              key={index}
              className={`p-5 border-2 cursor-pointer rounded-lg hover:border-blue-200 ${
                formData.travelGroup === item.title ? 'bg-blue-100 border-blue-200' : 'border-gray-300'
              }`}
              onClick={() => formHandler('travelGroup', item.title)}
            >
              <h2 className="text-4xl">{item.icons}</h2>
              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <h3 className="text-sm text-gray-500">{item.desc}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center md:justify-end mb-10">
        <Link to={'/register'}
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Trip'}
        </Link>
      </div>
      {generatedLocation && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Generated Trip Location</h2>
          <p className="mt-3 text-gray-700 text-lg">{generatedLocation}</p>
          <div className="mt-5">
            <h3 className="text-xl font-bold">Form Data:</h3>
            <p className="text-gray-700"><strong>Location:</strong> {formData.location}</p>
            <p className="text-gray-700"><strong>Days:</strong> {formData.days}</p>
            <p className="text-gray-700"><strong>Budget:</strong> {formData.budget}</p>
            <p className="text-gray-700"><strong>Travel Group:</strong> {formData.travelGroup}</p>
          </div>
          {hotelImages && hotelImages.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xl font-bold">Hotel Images:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                {hotelImages.map((image, index) => (
                  <img key={index} src={image} alt={`Hotel ${index + 1}`} className="w-full h-auto rounded-lg" />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateTrip;
