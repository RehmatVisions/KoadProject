 import React from 'react';

const Heading = ({ text, subtext }) => {
  return (
    <div className="my-12 mt-14 text-center px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold my-3 leading-tight">
        {text}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
        {subtext}
      </p>
    </div>
  );
};

export default Heading;
