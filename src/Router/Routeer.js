import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Header from '../layout/Header/Header'
import Home from '../Pages/Home'


const Routeer = () => {
  return (

    <>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default Routeer