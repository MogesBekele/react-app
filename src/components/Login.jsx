import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h4 className="text-2xl font-bold mb-6 text-center">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={changeHandler}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
            
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={changeHandler}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
          </div>
          <button onClick={() => navigate('/create-trip')}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a></p>
          <p className="text-gray-600 mt-2"><a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;