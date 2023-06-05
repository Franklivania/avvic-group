import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Landing from './Pages/Landing/Landing'
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactUs from './Pages/ContactUs/ContactUs'
import Careers from './Pages/Careers/Careers'
import AvvicTech from './Pages/AvvicTech/AvvicTech'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='' element={<Landing />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/careers' element={<Careers />}/>
          <Route path='/tech' element={<AvvicTech />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
