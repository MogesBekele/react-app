import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formField, setFormField] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormField({
      ...formField,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent default form submission
    if (!formField.email || !formField.password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/auth/login', formField);
      const { token } = response.data;
  
      if (response.status === 200 && token) {
        localStorage.setItem('token', token);  // Store token in localStorage
        navigate('/create-trip');
      } else {
        setErrorMessage('Login failed. Please try again.');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('An error occurred. Please try again.');
    }
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
              required
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
            required
            />
          </div>
          <button
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