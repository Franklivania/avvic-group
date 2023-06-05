import React, { useEffect, useState } from 'react';
import './Quotes.scss';
import 'animate.css'
import career2 from '../../assets/career2.jpg'

const Quotes = ({className}) => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
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
  }, []);

  return (
    <div id="quote" className={className}>

        <figure>
            <img src={career2} alt="" />
        </figure>

        <blockquote className='animate__animated animate__sildeInRight'>
            <q>{quote.text}</q>
            <br />
            <cite>- {quote.author}</cite>
        </blockquote>
    </div>
  );
};

export default Quotes;
