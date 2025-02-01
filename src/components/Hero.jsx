import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="text-gray-800 p-8 flex flex-col items-center justify-center min-h-screen animate-fade-in">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Discover your next adventure with AI:
      </h1>
      <h2 className="text-base md:text-lg mb-8 text-center animate-pulse">
        Personalized recommendations for your next trip
      </h2>
      <Link to="/register">
        <button className="bg-gray-300 text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors animate-fade-in">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Hero;
