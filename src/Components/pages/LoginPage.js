import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../../Utils/BaseUrl';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import bgimg from '../../assets/login-rigister-image.webp'

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  useEffect(() => {
    // Check for the token in cookies when the component mounts
    const token = Cookies.get('userauthToken');
    console.log(token)
    if (token) {
      navigate('/home'); // Redirect to the home page
    }
  }, [navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BaseUrl}/login`, formData,{
        withCredentials:true
      });
      toast.success(response.data.message); 
      navigate('/home');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }

  return (
<div className='flex items-center justify-center min-h-screen bg-cover' style={{backgroundImage:`url(${bgimg})`}}>
    <div className=" w-full bg-black/30  backdrop-blur-lg  border-2 border-black/20 p-6 rounded-lg   max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className='text-white'>
        <div>
          <h1 className='text-4xl font-lighter'>Login</h1>
          <label
            htmlFor="email"
            className="flex items-start text-sm font-semibold "
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            onChange={handleChange}
            value={formData.email}
            className="w-full mt-2 p-3 border bg-transparent border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="flex items-start text-sm font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-2 p-3 border bg-transparent border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-10  bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      <Link to={'/register'} className=' text-white/40 hover:underline'>Don't have an Account ? Sign Up</Link>
    </div>
    </div>
  );

}

export default LoginPage
