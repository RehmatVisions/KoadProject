 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import sliderone from "../images/twozingers.jpg";
import slidertwo from "../images/pizzays.jpg";
import Button from "./subComp/Button";

// Animation variant
const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="w-full h-screen pt-20 relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={2200}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={sliderone}
              alt="Burger Menu"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-start px-10 text-left">
              <motion.div
                className="max-w-md ml-10"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                key="slide1"
              >
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Try Our New Burger Menu
                </motion.h1>
                <motion.p
                  className="text-lg text-black mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  It's About Good And Fresh Ingredients
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button text="View Our Menu" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slidertwo}
              alt="Pizza Special"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-start px-10 text-left">
              <motion.div
                className="max-w-md ml-10"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                key="slide2"
              >
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Food For Soul
                </motion.h1>
                <motion.p
                  className="text-lg text-black mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Taste the crunch in every bite
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button text="View Our Menu" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
