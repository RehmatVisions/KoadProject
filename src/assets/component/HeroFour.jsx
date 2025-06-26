 import React from 'react'
import Button from './subComp/Button'

const HeroFour = () => {
  return (
    <div className='hero-four text-white h-[80vh] w-full flex items-center justify-center'>
      <div className=' w-full mx-4 sm:mx-10 md:mx-20 lg:mx-40 p-6 sm:p-8 md:p-10 h-auto'>
        <h1 className='text-center font-bold text-3xl sm:text-4xl md:text-5xl'>Book a Table</h1>
        <p className='text-center mx-auto text-gray-400 text-lg sm:text-xl my-4 sm:my-6 max-w-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto doeiusmod tempor condorico consectetur adipiscing elitut aliquip.
        </p>
        <div className='flex items-center justify-center'>
          <Button text={<h1 className='text-white text-lg sm:text-xl'>Reservation</h1>}/>
        </div>
      </div>
    </div>
  )
}

export default HeroFour