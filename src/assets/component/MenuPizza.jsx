 import React from 'react';
import { motion } from 'framer-motion';
import Heading from './subComp/Heading';
import Button from './subComp/Button';

import pizzaone from '../images/menu06.jpg';
import pizzatwo from '../images/menu07.jpg';
import pizzathree from '../images/menu08.jpg';
import pizzafour from '../images/menu09.jpg';
import pizzafive from '../images/menu10.jpg';
import pizzasix from '../images/menu06.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const MenuPizza = () => {
  const pizzas = [
    {
      name: "Oakey Smokey Pizza",
      shortTitle: "Fajita Chicken Flavor",
      description: "Tender chicken, onions, capsicum, fajita seasoning, cheese, and sauce.",
      price: "$18.99",
      image: pizzaone
    },
    {
      name: "White Rocotta Pizza",
      shortTitle: "Spicy Pepperoni Treat",
      description: "Crispy pepperoni slices with gooey cheese on golden crust.",
      price: "$29.49",
      image: pizzatwo
    },
    {
      name: "Original Margherita Pizza",
      shortTitle: "BBQ Tikka Loaded",
      description: "Smoky BBQ tikka chunks with creamy sauce and mozzarella.",
      price: "$10.45",
      image: pizzathree
    },
    {
      name: "Calzone",
      shortTitle: "Fajita Chicken Flavor",
      description: "Tender chicken, onions, capsicum, fajita seasoning, cheese, and sauce.",
      price: "$8.99",
      image: pizzafour
    },
    {
      name: "Mercy Margarita",
      shortTitle: "Spicy Pepperoni Treat",
      description: "Crispy pepperoni slices with gooey cheese on golden crust.",
      price: "$9.49",
      image: pizzafive
    },
    {
      name: "Napoletana",
      shortTitle: "BBQ Tikka Loaded",
      description: "Smoky BBQ tikka chunks with creamy sauce and mozzarella.",
      price: "$10.15",
      image: pizzasix
    } 
  ];

  return (
    <div className="bg-white py-5">
      <Heading text="Pizza" subtext="Try the delicious new dishes from our chef." />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {pizzas.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="bg-gray-50 min-h-[550px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center p-4 h-64">
              <motion.img
                className="w-full  h-64 object-contain"
                src={item.image}
                alt={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-6 text-center">
              <motion.h1 
                className="text-2xl font-bold mb-2 text-gray-800"
                whileHover={{ color: "#ef4444" }}
              >
                {item.name}
              </motion.h1>
              <p className="text-gray-600 text-md mb-4">{item.description}</p>
              <motion.h3 
                className="text-3xl font-bold text-red-500 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {item.price}
              </motion.h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button text="Add To Cart" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default MenuPizza;