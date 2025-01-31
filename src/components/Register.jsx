import React, { useState } from "react";

import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const handleSubmit = async(e)=>{
   e.preventDefault()
 
   try {
    const response = await axios.post('http://localhost:3000/auth/register', formData);

    if(response.status===201){
      navigate('/login')
    }
    console.log(response)
   } catch (error) {
    console.log(error)
    
   }


  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h4 className="text-2xl font-bold mb-6 text-center">Register</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Full Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="userName"
              onChange={changeHandler}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
