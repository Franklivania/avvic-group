import React, {useState} from 'react'
import './AboutScope.scss'
import 'animate.css'
import AboutNav from '../AboutNav/AboutNav'
import AboutInfoContainer from '../AboutInfoContainer/AboutInfoContainer'

const AboutScope = () => {
    const [activeSection, setActiveSection] = useState(null);
  return (
    <div id='aboutScope'>
      <AboutNav activeSection={activeSection} setActiveSection={setActiveSection} />
      <AboutInfoContainer activeSection={activeSection} />
    </div>
  )
}

export default AboutScope