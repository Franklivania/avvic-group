import React, { useState, useEffect } from 'react';
import './Hero.scss';
import data from '../../Data/Hero.json';
import 'animate.css';

const Hero = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleClick(index) {
    setCurrentIndex(index);
  }

  return (
    <div className={className} id='hero'>
      <div id='hr-top'>
        {data.map((item, index) => (
          <div
            className={`hero-content animate__animated ${
              index === currentIndex ? 'animate__fadeIn' : 'animate__fadeOut'
            }`}
            key={index}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <img src={item.image} alt='' />
            <span>
              <h2>{item.text}</h2>
            </span>
          </div>
        ))}
      </div>

      <div className='indicators'>
        {data.map((item, index) => (
          <div
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            key={index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
