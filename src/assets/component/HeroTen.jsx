 import React, { useState } from 'react'
import logo from '../images/logo.png';
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaPhone } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { SiGmail } from "react-icons/si";
import Button from '../component/subComp/Button';

const HeroTen = () => {
  const [email, setEmail] = useState('')
  const subscribed=()=>{
    alert("You’ve successfully subscribed.")
    setEmail('')
  }
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Social Section */}
        <div className='p-6 lg:p-8'>
          <img className='w-20' src={logo} alt="Company Logo" />
          <p className='text-gray-400 my-4 text-sm md:text-base'>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.
          </p>
          <div className="flex items-center mt-6 space-x-6">
            <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="text-gray-600 hover:text-blue-400 cursor-pointer" />
            <FaInstagramSquare className="text-gray-600 hover:text-pink-600 cursor-pointer" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className='p-6 lg:p-8'>
          <h1 className='text-xl font-medium mb-4'>NewsLetter</h1>
          <p className='text-gray-400 my-3 text-sm md:text-base'>
            Donec fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.
          </p>
          <div className="flex mt-6">
           
               <input 
              className='bg-gray-100 p-3 h-10 w-full max-w-xs border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400' 
              placeholder="Enter Your Email" 
              type="email" 
              value={email}
              onChange={(e)=>{ setEmail(e.target.value)}}
              required
            />
            <Button  onClick={subscribed} text='Subscribe' className="ml-2" />
           
          </div>
        </div>

        {/* Contact Section */}
        <div className='p-6 lg:p-8'>
          <h1 className='text-xl font-medium mb-4'>How To Find Us</h1>
          <p className='text-gray-400 my-3 text-sm md:text-base'>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.
          </p>
          <div className="mt-6 space-y-3">
            <p className='flex items-center text-sm md:text-base'>
              <GoLocation className="mr-2" />
              Avenue Marina 34568 NY (U.S)
            </p>
            <p className='flex items-center text-sm md:text-base'>
              <FaPhone className="mr-2" />
              +0987 193-34-76
            </p>
            <p className='flex items-center text-sm md:text-base'>
              <SiGmail className="mr-2" />
              statumsupport@mail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroTen