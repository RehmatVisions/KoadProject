 import React from 'react'
import Heading from './subComp/Heading'
import Card from './Card'
import Button from './subComp/Button'

import coffee from '../images/coffee.jpg'
import chair from '../images/chair.jpg'
import beard from '../images/beardshef.jpg'

const SimpleCards = () => {
  return (
    <section className="bg-gray-700 hero-main-nine py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Heading 
            text={<span className="text-white text-3xl sm:text-4xl font-bold mb-2 block">Latest News</span>} 
            subtext={<span className="text-gray-300 text-lg sm:text-xl block">Promotion in a cafe</span>}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card img={coffee} />
          <Card img={chair} />
          <Card img={beard} />
        </div>
      </div>

      <div className="flex justify-center items-center mt-12">
        <Button text={<span className="text-white text-lg font-semibold">View All News</span>} />
      </div>
    </section>
  )
}

export default SimpleCards
