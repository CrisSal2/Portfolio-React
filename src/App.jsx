import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './containers/home/home'
import Portfolio from './containers/portfolio/portfolio'
import Contact from './containers/contact/contact'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </>
  )
}

export default App
