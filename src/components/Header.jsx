import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <img src="./logo.svg" alt="Logo" className="h-10" />
      <Link to="/login" className="text-xl px-4 py-2 rounded-full bg-amber-400 font-semibold font-serif hover:bg-amber-500 transition-colors">
        Sign In
      </Link>
    </div>
  );
};

export default Header;
