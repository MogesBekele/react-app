import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CreateTrip from "./components/create-trip/CreateTrip";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        
        <Route path="/create-trip" element={<CreateTrip />} />
      </Routes>
    </div>
  );
};

export default App;
