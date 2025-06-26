import React from 'react'
//  import { render } from "react-dom";
import CountUp from "react-countup";
const PageHeroThree = () => {
  return (
    <>
      <div className='text-black mt-10  px-4  py-32'>
  <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>

    {/* Happy Customer */}
    <div className="flex flex-col items-center justify-center border-r border-gray-200 last:border-r-0">
      <CountUp
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        start={0}
        end={123}
        duration={3}
        suffix="K"
      />
      <h1 className="text-sm sm:text-base md:text-lg mt-2 font-semibold text-gray-600">Happy Customers</h1>
    </div>

    {/* Tasty Dishes */}
    <div className="flex flex-col items-center justify-center border-r border-gray-200 last:border-r-0">
      <CountUp
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        start={0}
        end={182}
        duration={3}
        suffix="K"
      />
      <h1 className="text-sm sm:text-base md:text-lg mt-2 font-semibold text-gray-600">Tasty Dishes</h1>
    </div>

    {/* Amazing Chips */}
    <div className="flex flex-col items-center justify-center border-r border-gray-200 last:border-r-0">
      <CountUp
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        start={0}
        end={54}
        duration={3}
        suffix="K"
      />
      <h1 className="text-sm sm:text-base md:text-lg mt-2 font-semibold text-gray-600">Amazing Chips</h1>
    </div>

    {/* Best Recipes */}
    <div className="flex flex-col items-center justify-center">
      <CountUp
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
        start={0}
        end={433}
        duration={3}
        suffix="K"
      />
      <h1 className="text-sm sm:text-base md:text-lg mt-2 font-semibold text-gray-600">Best Recipes</h1>
    </div>

  </div>
</div>
    </>
  )
}

export default PageHeroThree
