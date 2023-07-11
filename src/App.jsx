import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.scss'
import Landing from './Pages/Landing/Landing'
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactUs from './Pages/ContactUs/ContactUs'
import Careers from './Pages/Careers/Careers'
import AvvicTech from './Pages/AvvicTech/AvvicTech'
import AvvicConsult from './Pages/AvvicConsult/AvvicConsult'
import AvvicConnect from './Pages/AvvicConnect/AvvicConnect'
import Media from './Pages/Media/Media'
import Loader from './Pages/Loader/Loader'

function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='App'>
      {showLoader && <Loader />}
      <Router>
        <Routes>
          <Route path='' element={<Landing />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/tech' element={<AvvicTech />} />
          <Route path='/consult' element={<AvvicConsult />} />
          <Route path='/connect' element={<AvvicConnect />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/media' element={<Media />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
