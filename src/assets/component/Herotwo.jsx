 import React from 'react';
import { motion } from 'framer-motion';
import Button from './subComp/Button'; // your reusable button

const HeroTwo = () => {
  return (
    <div className="w-full hero-main-two min-h-screen bg-black flex items-center justify-center px-4 ">
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center md:text-left text-white max-w-3xl"
      >
        <h3 className="text-gray-500 text-2xl md:text-3xl font-bold mb-2">
          Best Dish Of The Day
        </h3>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Hamburger & Sweet Potato Fries
        </h2>
        <h1 className="text-5xl md:text-6xl text-red-500 font-bold mb-6">
          $19.99
        </h1>
        <Button text={<h2 className='text-white'>Add to Cart</h2>} />
      </motion.div>
    </div>
  );
};

export default HeroTwo;
