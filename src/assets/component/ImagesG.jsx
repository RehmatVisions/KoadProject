 import React from 'react'
import firstimg from '../images/harfpiza.jpg'
import secimg from '../images/bgbur.jpg'
import thirdimg from '../images/fries.jpg'
import fourimg from '../images/vegs.jpg'

const ImagesG = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" 
            src={firstimg} 
            alt="Pizza" 
          />
        </div>
        
        <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" 
            src={thirdimg} 
            alt="Fries" 
          />
        </div>
        
        <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" 
            src={secimg} 
            alt="Burger" 
          />
        </div>
        
        <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" 
            src={fourimg} 
            alt="Vegetables" 
          />
        </div>
      </div>
    </div>
  )
}

export default ImagesG