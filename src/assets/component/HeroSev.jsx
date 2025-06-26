  import React from 'react';
import mix from '../images/mix.jpg';
import listimgone from '../images/slideone.jpg';
import listimgtwo from '../images/bone.jpg';
import listimgthree from '../images/bthree.jpg';
import listimgfour from '../images/bfour.jpg';
import listimgfive from '../images/btwo.jpg';
import noodles from '../images/noodels.jpg';
import Lists from './subComp/Lists';

const HeroSev = () => {
  return (
    <>
     <div className="hero-five w-full flex flex-col lg:flex-row items-start justify-around px-4 py-10 lg:py-20 gap-10">
      
       <div className="left w-full lg:w-[500px] flex justify-center">
        <img 
          className="w-full max-w-[500px] lg:w-[600px] object-cover rounded-md"
          src={mix}
          alt="Pizza"
        />
      </div>

      {/* 📋 Right List */}
      <div className="right w-full max-w-xl">
        <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-orange-600">
          Burger
        </h1>
         <Lists image={listimgone} title="Spaghetti all’Amatriciana" price="58$" />
        <Lists image={listimgthree} title="Spaghetti all’Amatriciana" price="58$" />
        <Lists image={listimgfour} title="Spaghetti Carbonara" price="10$" />
        <Lists image={listimgfive} title="Mercy Margarita" price="21$" />
                <Lists image={listimgfour} title="Original Margherita " price="61$" />
        <Lists image={listimgthree} title="Mercy Margarita" price="21$" />
              
      </div>
      {/* 🍕 Left Image */}
       
    </div>
    </>
  );
};

export default HeroSev;
