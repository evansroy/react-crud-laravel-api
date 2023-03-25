import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';


function MyRouter() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about-us' element = {<About/>}/>
      <Route path='/contact-us' element = {<Contact/>}/>
    </Routes>
  )
}

export default MyRouter;
