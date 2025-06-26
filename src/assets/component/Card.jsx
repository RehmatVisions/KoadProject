import React from 'react'
 
//  const images = [coffee, chair, beard];
const Card = (props) => {
  return (
    <>
       <div className=" max-w-sm h-140 bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img  className="w-full h-64 object-cover" src={props.img}alt="Card image" />
            <div className="p-4 text-center ">
              <h1 className="text-2xl  font-bold text-gray-800 mb-2 p-3">Etiam sodales, erat  non</h1>
              <h4 className="text-md px-10 my-2 text-gray-600 py-2">Donec nec  felisnec justo eget felisnec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.</h4>
                 <p className='text-gray-500 sm my-3'>24.04.2020 / 2 comments</p>
            </div>
          </div>
    </>
  )
}

export default Card
