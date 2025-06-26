import React from 'react'
import Navbar from '../component/Navbar'
import MenuHero from '../component/MenuHero'
import Heading from '../component/subComp/Heading'
import Form from '../component/Form'
import MapComponents from '../component/MapComponents'
import HeroTen from '../component/HeroTen'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <>
      <div>
        <Navbar/>
           <MenuHero heading="Contacts" para="get in touch"/>
           <Heading text="Contact Us" subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto
doeiusmod tempor condorico consectetur adipiscing elitut aliquip."/>
<Form/>
<MapComponents/>
<HeroTen/>
<Footer/>
      </div>
    </>
  )
}

export default Contact
