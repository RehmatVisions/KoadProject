import React from 'react'
import Navbar from '../component/Navbar'
import MenuHero from '../component/MenuHero'
import MenuPizza from '../component/MenuPizza'
import MenuPasta from '../component/MenuPasta'
import MenuBurger from '../component/MenuBurger'
import PreFooter from '../component/PreFooter'
import Footer from '../component/Footer'
import HeroTen from '../component/HeroTen'

const Menu = () => {
  return (
    <>

      <Navbar/>
      <MenuHero heading="Our Menu " para="good food fresh ingredients"/>
      <MenuPizza/>
      <MenuPasta/>
      <MenuBurger/>
      <PreFooter/>
      <HeroTen />
      <Footer />
    </>
  )
}

export default Menu
