import React from 'react'
import "../src/Components/Style/App.css"
import Home from './Components/Pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import About from './Components/Pages/About'
import Artical from './Components/Pages/Artical'
import Project from './Components/Pages/Project'
import Footer from './Components/Footer'


function App() {

  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/project' element={<Project />}></Route>
      <Route path='/artical' element={<Artical />}></Route>
    </Routes>
    {/* <Footer></Footer> */}
    </>
  )
}

export default App
