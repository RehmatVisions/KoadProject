 import React from 'react'

const Lists = (props) => {
  return (
    <div className='flex my-8 items-center w-full max-w-md md:max-w-xl lg:w-[560px] justify-between px-4'>
      <img 
        className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover' 
        src={props.image} 
        alt={props.title} 
      />
      <div className='flex-1 mx-3 sm:mx-4 md:mx-6'>
        <h1 className='text-lg sm:text-xl font-medium'>{props.title}</h1>
        <h3 className='text-gray-400 text-sm sm:text-base'>
          Smoke mozzarella, basil and picorino Romano
        </h3>
      </div>
      <p className='text-red-600 font-bold text-xl sm:text-2xl whitespace-nowrap'>
        {props.price}
      </p>
    </div>
  )
}

export default Lists