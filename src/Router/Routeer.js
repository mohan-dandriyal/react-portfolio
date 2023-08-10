import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Header from '../layout/Header/Header'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Service from '../Pages/Service'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'

const Routeer = () => {
  return (

    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact/>} />

      </Routes>
    </>
  )
}

export default Routeer