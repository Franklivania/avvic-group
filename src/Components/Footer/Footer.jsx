import React, {useState, useEffect}from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';
import right from '../../assets/right.png'

const Footer = () => {
    const [year, setYear] = useState(null);

    useEffect(() => {
        const date = new Date();
        const currentYear = date.getFullYear();
        setYear(currentYear);
    }, []);

  return (
    <footer>
        <div className='foot'>
            <div className='menu'>
                <h2>Quick Links</h2>
                <Links link={'/about'} title={"ABOUT"} />
                <Links link={'/contact'} title={"CONTACT US"} />
                <Links link={'/privacy'} title={"PRIVACY POLICY"} />
                <Links link={'/terms'} title={"TERMS AND CONDITIONS"} />
            </div>
            <aside>
                <h2>Get in Touch</h2>
                <address>
                    <h1>Address</h1>
                    <p>
                        House B1, Rose Gardens Courts,
                        Rangers Avenue, Enugu. Nigeria
                    </p>
                </address>

                <a href="mailto:info@avvicgroup.com">info@avvicgroup.com</a>
                <a href="tel:+234 814 9316 300">+234 814 9316 300</a>
            </aside>
            <div className='subs'>
                <h2>Subsidaries</h2>
                <Links link={'/consult'} title={"CONSULT"} />
                <Links link={'/connect'} title={"CONNECT"} />
                <Links link={'/home'} title={"HOME"} />
                <Links link={'/agro'} title={"AGRO"} />
                <Links link={'/tech'} title={"TECH"} />
            </div>
            <aside>
                <h2>Follow Us</h2>
                <div className='socials'>
                    <a href="" target='_blank'><i className='fa-brands fa-facebook fa-2x'></i></a>
                    <a href="" target='_blank'><i className='fa-brands fa-linkedin fa-2x'></i></a>
                    <a href="" target='_blank'><i className='fa-brands fa-twitter fa-2x'></i></a>
                    <a href="" target='_blank'><i className='fa-brands fa-instagram fa-2x'></i></a>
                </div>
                <label htmlFor="">
                    <input type="email" name="email" id="email" placeholder='Your Email Address' />
                    <button type='button'>
                        <img src={right} alt="" />
                    </button>
                </label>
            </aside>
        </div>
        <div className='foots'>
            <p>© {year}  AVVIC Group | All rights reserved.</p>
        </div>
    </footer>
  )
}

function Links({link, title}){
    return (
        <Link to={link} className='links'>
            {title}
        </Link>
    )
}

export default Footer