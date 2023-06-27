import React, { useEffect, useState } from 'react';
import './Quotes.scss';
import 'animate.css'
import career2 from '../../assets/career2.jpg'

const Quotes = ({className}) => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      fetch('https://type.fit/api/quotes')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (Array.isArray(data) && data.length > 0) {
            const randomQuote = data[Math.floor(Math.random() * data.length)];
            setQuote({ text: randomQuote.text, author: randomQuote.author });
          }
        });
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div id="quote" className={className}>

        <figure>
            <img src={career2} alt="" />
        </figure>

        <blockquote >
            <q className='animate__animated animate__fadeInRight'>{quote.text}</q>
            <br />
            <cite className='animate__animated animate__fadeInRight animare'>- {quote.author}</cite>
        </blockquote>
    </div>
  );
};

export default Quotes;
