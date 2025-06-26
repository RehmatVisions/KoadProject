 import React from 'react'
import Navbar from '../component/Navbar'
import MenuHero from '../component/MenuHero'
import PageHero from '../component/PageHero'
import PageHeroTwo from '../component/PageHeroTwo'
import PageHeroThree from '../component/PageHeroThree'
import PageHeroFour from '../component/PageHeroFour'
import HeroEight from '../component/HeroEight'
import HeroTen from '../component/HeroTen'
import Footer from '../component/Footer'
 
 
 const Page = () => {
   return (
     <>
       <Navbar/>
          <MenuHero heading="About Us " para="get to know more about our bistro"/>
             <PageHero/>
             <PageHeroTwo/>
             <PageHeroThree/>
             <PageHeroFour/>
             <HeroEight/>
             <HeroTen/>
             <Footer/>
              

     </>
   )
 }
 
 export default Page
 