import React, { useState } from 'react';

const ForgotPassword = () => {
  const [formField, setFormData] = useState({
    email: '',
    newPassword: ''
  });

  const changeHandler = (e) => {
    setFormData({
      ...formField,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot Password form submitted:', formField);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h4 className="text-2xl font-bold mb-6 text-center">Forgot Password</h4>
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
            <label className="block text-gray-700 font-semibold mb-2">New Password:</label>
            <input
              type="password"
              placeholder="Enter Your New Password"
              name="newPassword"
              onChange={changeHandler}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;