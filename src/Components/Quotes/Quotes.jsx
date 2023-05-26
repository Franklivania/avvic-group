import React, { useEffect, useState } from 'react';
import './Quotes.scss';

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

        <blockquote>
            <q>{quote.text}</q>
            <br />
            <cite>- {quote.author}</cite>
        </blockquote>
    </div>
  );
};

export default Quotes;
