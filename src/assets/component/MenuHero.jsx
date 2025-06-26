 import React from 'react'

const MenuHero = (props) => {
    return (
        <>
            <div className="w-full">
                <div className="mainmenu-hero h-80 sm:h-96 md:h-[28rem]">
                    <div className="h-full flex items-center justify-start px-6 sm:px-10 md:px-16">
                        <div className="mt-10 sm:mt-14 md:mt-16">
                            <h1 className="text-white text-4xl sm:text-4xl md:text-5xl  font-bold">
                                {props.heading}
                            </h1>
                            <p className="text-gray-200 text-sm py-3  sm:text-md md:text-xl">
                                {props.para}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-gray-500 ml-6 sm:ml-10 md:ml-12 mt-5 text-sm sm:text-base">
                    <a href="#">Home</a><a href="#"> / Contact</a>
                </div>
            </div>
        </>
    )
}

export default MenuHero
