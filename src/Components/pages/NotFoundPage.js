import React from 'react'
import { useNavigate } from 'react-router-dom';

import notf from '../../assets/404 not found image.webp'

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate('/')
  } 
  return (
    <div className=' h-screen'>
      <img className='h-96  mt-32 ml-auto mr-auto' src={notf}/>
      <h1 className='text-blue-700  uppercase text-2xl'> 404 not found </h1>
      <h2>The page you are lokking for is not found </h2>
      Go to home page <button className='text-red-700 rounded-full border-2 font-bold bg-white p-3' onClick={handelClick}>Click Hear</button>
    </div>
  )
}

export default NotFoundPage
