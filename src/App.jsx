import React from 'react'
import Home from './assets/Pages/Home'
import Menu from './assets/Pages/Menu'
import Pagee from './assets/Pages/Pagee' 
import News from './assets/Pages/News'
import Contact from './assets/Pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 


const App = () => {
  return (
    <>


      {/* <Home/> */}
      {/* <Menu/> */}
      {/* <Pagee/> */}
      {/* <News/> */}
      {/* <Contact/> */}

      <BrowserRouter >
       <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pagee" element={<Pagee />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />

        

       
      </Routes>
      </BrowserRouter> 
      

      
    </>
  )
}

export default App
