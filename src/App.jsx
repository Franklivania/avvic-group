import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Landing from './Pages/Landing/Landing'
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactUs from './Pages/ContactUs/ContactUs'
import Careers from './Pages/Careers/Careers'
import AvvicTech from './Pages/AvvicTech/AvvicTech'
import AvvicConsult from './Pages/AvvicConsult/AvvicConsult'
import AvvicConnect from './Pages/AvvicConnect/AvvicConnect'
import Media from './Pages/Media/Media'

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
          <Route path='/consult' element={<AvvicConsult />}/>
          <Route path='/connect' element={<AvvicConnect />}/>
          <Route path='/media' element={<Media />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
