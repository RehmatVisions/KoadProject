 import React from 'react';
import pizzaveg from '../images/pizavegs.jpg';
import listimgone from '../images/pizzaa.jpg';
import listimgtwo from '../images/pizzatwo.jpg';
import listimgthree from '../images/pthree.jpg';
import listimgfour from '../images/slidefive.jpg';
import listimgfive from '../images/chikpiza.jpg';
import Lists from './subComp/Lists';

const HeroFive = () => {
  return (
    <div className="hero-five w-full flex flex-col lg:flex-row items-start justify-around px-4 py-10 lg:py-20 gap-10">
      
      {/* 🍕 Left Image */}
      <div className="left w-full lg:w-[500px] flex justify-center">
        <img 
          className="w-full max-w-[500px] lg:w-[600px] object-cover rounded-md"
          src={pizzaveg}
          alt="Pizza"
        />
      </div>

      {/* 📋 Right List */}
      <div className="right w-full max-w-xl">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-orange-600">
          Pizza
        </h1>
        <Lists image={listimgone} title="Oakey Smokey Pizza" price="12$" />
        <Lists image={listimgtwo} title="White Ricotta Pizza" price="42$" />
        <Lists image={listimgthree} title="Original Margherita Pizza" price="58$" />
        <Lists image={listimgfour} title="Calzone" price="10$" />
        <Lists image={listimgfive} title="Mercy Margarita" price="21$" />
        <Lists image={listimgtwo} title="Mercy Margarita" price="17$" />
      </div>
    </div>
  );
};

export default HeroFive;
