import React, { useState, useEffect } from 'react';
import './Scope.scss';
import agro from '../../assets/agro.jpeg'
import agro1 from '../../assets/agro1.jpg'
import agro2 from '../../assets/agro2.png'
import agro3 from '../../assets/agro3.webp'
import connect from '../../assets/connect.jpg'
import consult from '../../assets/consult.jpg'
import tech from '../../assets/tech.jpg'
import tech1 from '../../assets/tech1.jpeg'
import tech2 from '../../assets/tech2.jpg'
import tech3 from '../../assets/tech3.jpg'
import financial from '../../assets/financial.jpeg'
import business from '../../assets/business.jpg'
import people from '../../assets/people.jpg'
import research from '../../assets/research.jpg'
import home from '../../assets/home.jpg'
import home1 from '../../assets/home1.jpg'
import right from '../../assets/right.png'
import left from '../../assets/left.png'
import SlideButton from '../SlideButton/SlideButton';
import Button from '../Button/Button';

const Scope = ({ className }) => {
  const slides = [
    {
      id: 1,
      className: 'agro',
      image: agro,
      title: 'AVVIC AGRO',
      text: 'Providing the best services for agricultural field management operations, including providing critical technology to aid in the production process. \n Our focus is firmly on precision agriculture, the use existing and emerging technologies to enhance farmer’s capacity to manage inventory, monitor yield, control pests, optimize fertilizer application, manage farm finances, and efficiently utilize available farm resources.',
      link: '/agro',
      content: [
        {
          id: 1,
          img: agro1,
          title: 'INVENTORY TRACKER SOLUTION',
        },
        {
          id: 2,
          img: agro2,
          title: 'PRODUCTION MANAGEMENT',
        },
        {
          id: 3,
          img: agro3,
          title: 'FARM ACCOUNTS AND FINANCIAL MANAGEMENT',
        },
      ],
    },
    {
      id: 2,
      className: 'consult',
      image: consult,
      title: 'AVVIC CONSULT',
      text: 'We offer a robust portfolio of business management services to assist business owners and leaders manage vital business processes in a result driven and cost effective manner.AVVIC offers a robust portfolio of business management services to assist business owners and leaders manage vital business processes in a result driven and cost effective manner.',
      link: '/consult',
      content: [
        {
            id: 1,
            img: agro,
            title: "AGRICULTURE"
        },
        {
            id: 2,
            img: tech1,
            title: "INFORMATION TECHNOLOGY"
        },
        {
            id: 3,
            img: financial,
            title: "FINANCIAL SERVICES"
        }
      ],
    },
    {
      id: 3,
      className: 'connect',
      image: connect,
      title: 'AVVIC CONNECT',
      text: 'We are an integrated financial consultancy and advisory services company. It offers unbundled financial consultancy services through strategic inter-industry partnerships, fitted to meet specific client needs in different sectors.',
      link: '/connect',
      content: [
        {
            id: 1,
            img: business,
            title: "BUSINESS AND FINANCIAL ADVISORY"
        },
        {
            id: 2,
            img: people,
            title: "OUR PEOPLE"
        }
      ],
    },
    {
      id: 4,
      className: 'tech',
      image: tech,
      title: 'AVVIC TECH',
      text: 'We are an evolved from an in-house IT solutions entity, which provides critical IT backbone for the Group, to an independent subsidiary incorporated to extend its custom-built array of services to a broader client base. \n Avvic Tech provides a tech platform that aggregates end to end solutions for a diverse set of industries and companies. It provides a suite of services that integrates data and database management, business analytics and intelligent technologies.',
      link: '/tech',
      content: [
        {
            id: 1,
            img: tech1,
            title: "IT BUSINESS ANALYTICS"
        },
        {
            id: 2,
            img: tech2,
            title: "DATABASE MANAGEMENT"
        },
        {
            id: 3,
            img: research,
            title: "RESEARCH AND DEVELOPMENT"
        },
        {
            id: 4,
            img: tech3,
            title: "IT SYSTEMS DEVELOPMENT AND MANAGEMENT"
        }
      ],
    },
    {
      id: 5,
      className: 'home',
      image: home,
      title: 'AVVIC HOMES',
      text: 'We are involved in core real estate and housing development. Our activity profile includes property development, property leasing, property rentals, sale of fully furnished property, land sales, facility management, property make-over, real estate consultancy and advisory. \n\n Our market presence provides real estate industry access to a wide stratum of sophisticated investors and consumers.',
      link: '/homes',
      content: [
        {
            id: 1,
            img: home1,
            title: "REAL ESTATE ANALYTICS"
        },
        {
            id: 2,
            img: people,
            title: "OUR PEOPLE"
        }
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const changeSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className={className} id='scope'>
        <div className="slide">        
            {slides.map((slide, index) => (
                <div
                    className={`slides ${
                        index === currentSlide
                        ? "active"
                        : index === (currentSlide - 1 + slides.length) % slides.length
                        ? "prev"
                        : "next"
                    }`}
                    key={index}
                >                
                <img src={slide.image} alt='' />
                <article className={slide.className}>
                    <h1>{slide.title}</h1>
                    <p>{slide.text}</p>
                    <Button title={"KNOW MORE"} link={slide.link} className={'button'}/>

                    <div className='content'>
                    {slide.content.map((item, idx) => (
                        <div className='item' key={idx}>
                        <img src={item.img} alt='' />
                        <h3>{item.title}</h3>
                        </div>
                    ))}
                    </div>
                </article>
                </div>
            ))}
      </div>

      <div className='slideControl'>
        <SlideButton className={'previous'} onClick={previousSlide} image={left} />
        {slides.map((slide, index) => (
          <div
            className={`line  ${currentSlide === index ? 'active' : ''}`}
            key={index}
            onClick={() => changeSlide(index)}
          />
        ))}
        <SlideButton className={'next'} onClick={nextSlide} image={right} />
      </div>
    </div>
  );
};

export default Scope;
