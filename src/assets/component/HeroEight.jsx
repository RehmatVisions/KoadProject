 import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Heading from "./subComp/Heading";
import boy from '../images/boy.jpg';
import girl from '../images/girl.jpg';
import girltwo from '../images/girltwo.jpg';

const HeroEight = () => {
  const cardData = [
    {
      img: boy,
      id: "Chef",
      title: "Ali Raza",
      para: "The burgers were juicy and full of flavor. Best food experience I've had in a long time!"
    },
    {
      img: girl,
      id: "Manager",
      title: "Mehwish",
      para: "I ordered pizza and fries — super fresh and delivered hot! Highly recommended for foodies."
    },
    {
      img: boy,
      id: "Designer",
      title: "Omer Sheikh",
      para: "Loved their zinger and crispy chicken. Fast delivery and excellent packaging too!"
    },
    {
      img: girltwo,
      title: "Fatima Noor",
      id: "chef",
      para: "The desserts were delicious! I especially loved the chocolate lava cake. Will order again!"
    },
    {
      img: boy,
      id: "Designer",
      title: "Zain Malik",
      para: "The food came right on time, still hot and fresh. Their BBQ platter was outstanding!"
    },
    {
      img: girl,
      id: "Manager",
      title: "Hira Tariq",
      para: "Tried their new pasta — creamy, cheesy, and just perfect. My kids loved it too!"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      <Heading text="Testimonials" subtext="They Say About Us" />
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <Slider {...settings}>
          {cardData.map((card) => (
            <div key={`${card.id}-${card.title}`} className="px-2 focus:outline-none">
              <div className="bg-white rounded-xl p-5 shadow-md h-full min-h-[400px] text-center mx-auto max-w-xs sm:max-w-sm md:max-w-none">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-16 h-16 rounded-full mx-auto mb-4 mt-5 object-cover border-2 border-gray-200"
                />
                <div className="border-b border-gray-200 w-3/4 mx-auto py-2">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm my-1 text-gray-500 uppercase">{card.id}</p>
                </div>
                <p className="text-gray-600 text-base sm:text-lg mt-6 px-2">
                  {card.para}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroEight;