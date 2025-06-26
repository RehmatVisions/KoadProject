 import React from 'react';
import Button from './subComp/Button';
import ReservationForm from './ReservationForm';

const PreFooter = () => {
  return (
    <>
      <div className='prefooter min-h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-4xl mx-auto py-12 sm:py-16 lg:py-20'>

          <div className='mb-10 text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-medium text-white'>
              Book a Table
            </h1>
            <p className='text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-300 font-semibold mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto
              doeiusmod tempor condorico consectetur adipiscing elitut aliquip.
            </p>
          </div>

          <ReservationForm />
        </div>
      </div>
    </>
  );
};

export default PreFooter;
