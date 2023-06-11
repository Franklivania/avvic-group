import React, {useState, useEffect}from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';
import right from '../../assets/right.png'
import logo from '../../assets/avviclogo.png'

const Footer = () => {
    const [year, setYear] = useState(null);

    useEffect(() => {
        const date = new Date();
        const currentYear = date.getFullYear();
        setYear(currentYear);
    }, []);

  return (
    <footer>
        <Link to={'/'} id='foot-logo'><img src={logo} alt="" /></Link>

        <div className='foot'>
            <aside>
                <h2>Subscribe</h2>
                <p>Join our newsletter to stay up to date on latest information</p>

                <br />

                <label htmlFor="">
                    <input type="email" name="email" id="email" placeholder='Your Email Address' />
                    <button type='button'>
                        {/* <img src={right} alt="" /> */}
                        Subscribe
                    </button>

                </label>

                <p id='sub'>By subscribing you agree to with our Privacy Policy and provide <br /> consent to receive updates from our company.</p>
            </aside>

            <aside>
                <h2>Get in Touch</h2>
                <section>
                    <h1>Address</h1>
                    <p>
                        House B1, Rose Gardens Courts, <br />
                        Rangers Avenue, Enugu. Nigeria
                    </p>
                </section>

                <a href="mailto:info@avvicgroup.com">info@avvicgroup.com</a>
                <a href="tel:+234 814 9316 300">+234 814 9316 300</a>

                <div className='socials'>
                    <a href="" target='_blank'><i className='fa-brands fa-facebook '></i></a>
                    <a href="" target='_blank'><i className='fa-brands fa-linkedin '></i></a>
                    <a href="" target='_blank'><i className='fa-brands fa-twitter '></i></a>
                    <a href="" target='_blank'><i className='fa-brands fa-instagram '></i></a>
                </div>
            </aside>

            <div className='menu'>
                <h2>Quick Links</h2>
                <Links link={'/about'} title={"ABOUT"} />
                <Links link={'/contact'} title={"CONTACT US"} />
            </div>
            <div className='subs'>
                <h2>Subsidaries</h2>
                <Links link={'/consult'} title={"CONSULT"} />
                <Links link={'/connect'} title={"CONNECT"} />
                {/* <Links link={'/home'} title={"HOME"} /> */}
                {/* <Links link={'/agro'} title={"AGRO"} /> */}
                <Links link={'/tech'} title={"TECH"} />
            </div>
        </div>
        <div className='foots'>
            <p>© {year}  AVVIC Group | All rights reserved.</p>

            <div id="privacy">
            <   Links link={'/privacy'} title={"Privacy policy"} />
                <Links link={'/terms'} title={"Terms of service"} />
            </div>
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