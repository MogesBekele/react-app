import React from "react";


const Header = () => {
 
  return (
    <div className="flex justify-between items-center p-4 bg-green-50 border-gray-300">
      <img src="./logo.svg" alt="Logo" className="h-10"/>
      <button className="text-xl px-4 py-2 rounded-full bg-amber-400 font-semibold font-serif hover:bg-amber-500 transition-colors">
        Sign In
      </button>
    </div>
  );
};

export default Header;
