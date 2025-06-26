 import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import page01 from '../images/page09.jpg';
import page02 from '../images/page11.jpg';
import page03 from '../images/page10.jpg';

const PageHeroFour = () => {
  const cards = [
    {
      img: page01,
      title: 'Corben Naylor',
      subtitle: 'Chef',
    },
    {
      img: page02,
      title: 'Raya Leach',
      subtitle: 'Chef',
    },
    {
      img: page03,
      title: 'Jozefo Teodora',
      subtitle: 'Chef',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl overflow-hidden h-[90vh] flex flex-col transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl"
        >
          {/* Image */}
          <div className="h-[60%] overflow-hidden">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="h-[25%] p-4 text-center mt-5 transition-all duration-500">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-gray-600 my-2">{card.subtitle}</p>
          </div>

          {/* Social Icons */}
          <div className="border-t border-gray-300 px-5 py-4">
            <div className="flex justify-center space-x-4">
              <FaFacebookF className="text-blue-600 text-xl cursor-pointer transition transform hover:scale-125" />
              <FaTwitter className="text-blue-400 text-xl cursor-pointer transition transform hover:scale-125" />
              <FaInstagram className="text-pink-600 text-xl cursor-pointer transition transform hover:scale-125" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageHeroFour;
