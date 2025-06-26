 import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import MenuHero from '../component/MenuHero';
import NCard from '../component/NCard';
import NCard01 from '../images/coffee.jpg';
import NCard02 from '../images/chair.jpg';
import NCard03 from '../images/beardshef.jpg';
import NCard04 from '../images/news07.jpg';
import NCard05 from '../images/news10.jpg';
import NCard06 from '../images/news09.jpg';
import HeroEight from '../component/HeroEight';
import HeroTen from '../component/HeroTen';
import Footer from '../component/Footer';

const News = () => {
  const [searchText, setSearchText] = useState('');

  // All categories in one array
  const categories = [
    "Company", "Market Research", "Sales Services", "Manage Business", "Creativity",
    "Burgers", "Pizzas", "French Fries", "Hot Dogs", "Sandwiches",
    "Chicken Wings", "Grilled Chicken", "Tacos", "Burritos", "Nachos",
    "Onion Rings", "Shawarma", "Donuts", "Ice Cream", "Sundaes",
    "Smoothies", "Milkshakes", "Cold Coffee", "Hot Coffee", "Tea",
    "Soft Drinks", "Mojitos", "Fried Rice", "Noodles", "Pasta",
    "Garlic Bread", "Chicken Nuggets", "Popcorn Chicken", "Stuffed Crust Pizza", "Cheese Balls",
    "Nuggets", "Chicken Strips", "Fish Fingers", "Cheesy Fries", "Loaded Nachos",
    "Mini Tacos", "Corn Dogs", "Churros", "Mozzarella Sticks", "Chicken Popcorn",
    "Club Sandwich", "Zinger Burger", "BBQ Pizza", "Peanut Butter Shake", "Strawberry Shake",
    "Vanilla Shake", "Mango Smoothie", "Oreo Shake"
  ];

  // Filter categories
  const filteredCategories = categories.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <MenuHero heading="Our News" para="Our news and events" />

      <div className="bg-gray-100 py-16 px-4 lg:px-20 flex flex-col lg:flex-row gap-10">
        
        {/* Left: Cards */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <NCard title="Etiam sodales, erat non." sub="Cafe" img={NCard01} />
            <NCard title="Quisque volutpat mattis." sub="Restaurant" img={NCard02} />
            <NCard title="Cras iaculis ultricies nulla." sub="Bakery" img={NCard03} />
            <NCard title="Etiam sodales, erat." sub="Cook" img={NCard04} />
            <NCard title="Sodales, erat non." sub="Burger" img={NCard05} />
            <NCard title="Quisque volutpat mattis." sub="Sweet" img={NCard06} />
          </div>
        </div>

        {/* Right: Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Search Categories"
            className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>

          <ul className="space-y-2 text-sm text-gray-700 max-h-[300px] overflow-y-auto">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-red-500">{item}</a>
                </li>
              ))
            ) : (
              <li className="text-gray-400">No items found</li>
            )}
          </ul>
        </div>
      </div>
      <HeroEight/>
             <HeroTen/>
             <Footer/>
    </>
  );
};

export default News;
