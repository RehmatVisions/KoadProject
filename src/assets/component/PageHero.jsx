 import React from 'react'
import page04 from '../images/page04.png'
import page05 from '../images/page05.jpg'
import page06 from '../images/page06.png'

const PageHero = () => {
  return (
    <>
      <div className='h-screen flex flex-col lg:flex-row items-center p-16 justify-around mt-10'>
        {/* Left Image - Full height on mobile, half on desktop */}
        <div className="left  lg:w-1/2 h-1/2 lg:h-screen">
          <img 
            className='w-full  object-cover object-center' 
            src={page04} 
            alt="Our restaurant history" 
          />
        </div>
        
        {/* Right Content - Full width on mobile, fixed width on desktop */}
        <div className="right mt-15 w-full lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <h1 className='text-4xl sm:text-4xl md:text-5xl font-medium mb-2'>Our History</h1>
          <p className='text-gray-500 text-md sm:text-base mb-4'>Discover Our Story</p>
          <p className='text-gray-500 text-sm sm:text-base md:text-md mb-6 leading-relaxed'>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
            <br /><br />
            Sed semper orem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi n lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          
          {/* Images - Responsive layout */}
          <div className="images flex items-center mt-8">
            <img 
              className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover' 
              src={page05} 
              alt="Founder" 
            /> 
            <img 
              className='w-24 h-8 sm:w-32 sm:h-10 md:w-47 md:h-13 mx-3 sm:mx-4 md:mx-6 object-contain' 
              src={page06} 
              alt="Signature" 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageHero