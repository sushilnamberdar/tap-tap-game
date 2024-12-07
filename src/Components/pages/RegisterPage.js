import axios from 'axios';
import React, { useState } from 'react'
import { BaseUrl } from '../../Utils/BaseUrl';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import bgimg from '../../assets/login-rigister-image.webp'

const RegisterPage = () => {
  const [formdata, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BaseUrl}/register`, formdata);
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{backgroundImage:`url(${bgimg})`,backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      <div className="w-full max-w-md bg-black/30 backdrop:blur-lg border-2 border-black/30 rounded-lg shadow-md p-6">
        <h2 className="text-2xl text-white font-light text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label
              htmlFor="username"
              className="flex items-start text-sm font-medium "
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formdata.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              className="w-full mt-1 p-2 border  bg-transparent rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="flex items-start text-sm font-medium "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full mt-1 p-2 border bg-transparent rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="flex items-start text-sm font-medium "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full mt-1 p-2 border bg-transparent rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>

        </form>
        <Link to={'/login'} className=' text-white/40 hover:underline'> !Already have an account </Link>
      </div>
    </div>
  );
}

export default RegisterPage
