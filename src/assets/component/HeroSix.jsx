 import React from 'react';
 
import listimgthree from '../images/slidefour.jpg';
 
import listimgfive from '../images/slidetwo.jpg';
import noodles from '../images/noodels.jpg';
import Lists from './subComp/Lists';

const HeroSix = () => {
  return (
    <>
     <div className="hero-five w-full flex flex-col lg:flex-row items-start justify-around px-4 py-10 lg:py-20 gap-10">
      
       

      {/* 📋 Right List */}
      <div className="right w-full max-w-xl">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-orange-600">
          Pasta
        </h1>
         
        <Lists image={listimgthree} title="Spaghetti all’Amatriciana" price="58$" />
     
        <Lists image={listimgfive} title="Mercy Margarita" price="21$" />
                <Lists image={listimgfive} title="Original Margherita " price="61$" />
        
      </div>
      {/* 🍕 Left Image */}
      <div className="left w-full lg:w-[500px] flex justify-center">
        <img 
          className="w-full max-w-[500px] lg:w-[600px] object-cover rounded-md"
          src={noodles}
          alt="Pizza"
        />
      </div>
    </div>
    </>
  );
};

export default HeroSix;
