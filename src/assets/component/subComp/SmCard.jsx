 import React from 'react'

const SmCard = ({ image, title, desc }) => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-5 md:p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 h-full">
      <div className="flex justify-center items-center mb-4 sm:mb-5">
        <img 
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" 
          src={image} 
          alt={title} 
        />
      </div>
      <h2 className="text-center text-black font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
        {title}
      </h2>
      <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg leading-tight sm:leading-snug">
        {desc}
      </p>
    </div>
  )
}

export default SmCard