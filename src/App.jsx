import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Landing from './Pages/Landing/Landing'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='' element={<Landing />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
