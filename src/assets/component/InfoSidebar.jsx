 import React from 'react';
import { FiClock, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const InfoSidebar = () => {
  return (
    <div className="w-full lg:w-[30%] bg-white p-8 ml-20 mb-10 text-gray-800 space-y-8 animate-fade-in">
      {/* Opening Hours */}
      <div className="transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
        <h2 className="text-xl font-semibold mb-3">Opening Hours</h2>
        <div className="space-y-2 text-sm">
          <p className="flex items-start transition-opacity duration-300 hover:opacity-90">
            <FiClock className="text-red-500 mt-1 mr-2" />
            <span>Monday - Thursday: 08AM - 10PM</span>
          </p>
          <p className="flex items-start transition-opacity duration-300 hover:opacity-90">
            <FiClock className="text-red-500 mt-1 mr-2" />
            <span>Friday - Saturday: 10AM - 11:30PM</span>
          </p>
          <p className="flex items-start transition-opacity duration-300 hover:opacity-90">
            <FiClock className="text-red-500 mt-1 mr-2" />
            <span>Sunday: 1PM - 10PM</span>
          </p>
        </div>
      </div>

      {/* Booking Time */}
      <div className="transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
        <h2 className="text-xl font-semibold mb-3">Booking Time</h2>
        <p className="flex items-start text-sm transition-opacity duration-300 hover:opacity-90">
          <FiClock className="text-red-500 mt-1 mr-2" />
          <span>24/7 Hours</span>
        </p>
      </div>

      {/* Contact Info */}
      <div className="transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
        <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
        <div className="space-y-3 text-sm">
          <p className="flex items-start transition-opacity duration-300 hover:opacity-90">
            <FiMapPin className="text-red-500 mt-1 mr-2" />
            <span>Avenue Marina 34568 NY (U.S)</span>
          </p>
          <p className="flex items-start transition-opacity duration-300 hover:opacity-90">
            <FiPhone className="text-red-500 mt-1 mr-2" />
            <span>+0987 193-34-76</span>
          </p>
          <p className="flex items-start transition-opacity duration-300 hover:opacity-90">
            <FiMail className="text-red-500 mt-1 mr-2" />
            <span>infosupport@mail.com</span>
          </p>
        </div>
      </div>

      {/* Add this to your global CSS or CSS-in-JS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InfoSidebar;