 import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pizzaone from '../images/slideone.jpg';
import pizzatwo from '../images/slidetwo.jpg';
import pizzathree from '../images/slidethree.jpg';
import pizzafour from '../images/slidefour.jpg';
import pizzafive from '../images/slidefive.jpg';
import pizzasix from '../images/slidethree.jpg';
import Button from "./subComp/Button";
import Heading from "./subComp/Heading";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
      
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const pizzas = [
    {
      name: "Chicken Fajita Pizza",
      shortTitle: "Fajita Chicken Flavor",
      description: "Tender chicken, onions, capsicum, fajita seasoning, cheese, and sauce.",
      price: "$8.99",
      image: pizzaone
    },
    {
      name: "Pepperoni Feast Pizza",
      shortTitle: "Spicy Pepperoni Treat",
      description: "Crispy pepperoni slices with gooey cheese on golden crust.",
      price: "$9.49",
      image: pizzatwo
    },
    {
      name: "BBQ Tikka Pizza",
      shortTitle: "BBQ Tikka Loaded",
      description: "Smoky BBQ tikka chunks with creamy sauce and mozzarella.",
      price: "$10.25",
      image: pizzathree
    },
    {
      name: "Veggie Delight Pizza",
      shortTitle: "Fresh Veggie Classic",
      description: "Colorful veggies, mushrooms, olives, and cheese on soft base.",
      price: "$7.99",
      image: pizzafour
    },
    {
      name: "Cheese Overload Pizza",
      shortTitle: "Extra Cheese Burst",
      description: "Cheese-filled crust topped with extra cheese and rich flavor.",
      price: "$9.75",
      image: pizzafive
    },
    {
      name: "Spicy Jalapeno Pizza",
      shortTitle: "Hot Jalapeno Kick",
      description: "Spicy jalapeños, chili flakes, cheese, and tomato sauce blend.",
      price: "$8.50",
      image: pizzasix
    }
  ];

  return (
    <div className="bg-white">
      <Heading text="Popular Dishes" subtext="Try the delicious new dishes from our chef"/>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Slider {...settings}>
          {pizzas.map((item, index) => (
            <div key={index} className="px-3 focus:outline-none">
              <div className="bg-gray-50 border-y-red-600 h-auto min-h-[500px] shadow-md flex flex-col">
                <div className="flex-grow flex items-center justify-center p-4">
                  <img 
                    className="w-full max-w-xs object-contain h-48" 
                    src={item.image} 
                    alt={item.name} 
                  />
                </div>
                <div className="text-center p-6 border-r-blue-400 flex flex-col items-center">
                  <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
                  <h2 className="text-gray-600 text-md my-2 px-2">{item.description}</h2>
                  <h3 className="text-3xl font-bold text-red-500 my-3">{item.price}</h3>
                  <Button text="Add To Cart" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}