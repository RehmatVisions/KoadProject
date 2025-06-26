 import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import InfoSidebar from './InfoSidebar';
  import { ToastContainer, toast } from 'react-toastify';
const Form = () => {
      const [name, setName] = useState('')
        const [email, setEmail] = useState('')
          const [message, setMessage] = useState('')
          const handlesubmit=(e)=>{
            e.preventDefault();
              toast.success(" “ Thank! We’ll reply soon ”", {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",

  });
            setName("")
             setEmail("")
             setMessage("")
          }
         
  return (
     
    <>
      <div className='flex flex-col lg:flex-row items-center justify-center animate-fade-in'>
        <InfoSidebar/>
        <div className="w-full flex justify-center items-center py-12 px-4">
          <form onSubmit={handlesubmit} className="w-full max-w-2xl bg-white p-8 md:p-10  transition-shadow duration-300">
            {/* Heading */}
            <div className="flex items-center mb-6 animate-fade-in-up">
              <MdEmail className="text-3xl text-red-500 mr-2 transition-transform duration-300 hover:scale-110" />
              <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            </div>

            {/* Name */}
            <div className="mb-5 animate-fade-in-up delay-100">
              <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
              <input
              required
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-0 focus:outline-none focus:border-red-400 transition-all duration-300 hover:border-gray-400"
              />
            </div>

            {/* Email */}
            <div className="mb-5 animate-fade-in-up delay-200">
              <label className="block text-gray-700 mb-1 font-medium">Email Address</label>
              <input
              required
                       onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-0 focus:outline-none focus:border-red-400 transition-all duration-300 hover:border-gray-400"
              />
            </div>

            {/* Message */}
            <div className="mb-6 animate-fade-in-up delay-300">
              <label className="block text-gray-700 mb-1 font-medium">Message</label>
              <textarea
              required
                           onChange={(e)=>{setMessage(e.target.value)}}
              value={message}
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:ring-0 focus:outline-none focus:border-red-400 transition-all duration-300 hover:border-gray-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md font-semibold text-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg animate-fade-in-up delay-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
       <ToastContainer />
    </>
  );
};

export default Form;