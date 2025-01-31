import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default App;
