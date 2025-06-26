 import React from 'react'
import SmCard from './subComp/SmCard'
import fish from '../images/fish.png'
import pots from '../images/pots.png'
import plate from '../images/plate.png'

const HeroThree = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <SmCard 
            image={fish} 
            title="Fresh Ingredients" 
            desc="Sed egestas, ante vulputa eros pede vitae luctus metus augue."
          />
          <SmCard 
            image={pots} 
            title="Vegan Menu" 
            desc="Sed egestas, ante vulputa eros pede vitae luctus metus augue."
          />
          <SmCard 
            image={plate} 
            title="Best Recipe" 
            desc="Sed egestas, ante vulputa eros pede vitae luctus metus augue."
          />
          <SmCard 
            image={fish} 
            title="Happy Clients" 
            desc="Sed egestas, ante vulputa eros pede vitae luctus metus augue."
          />
        </div>
      </div>
    </div>
  )
}

export default HeroThree