import React from "react";
import './ContactMedia.scss'

const ContactMedia = ({className}) => {
    return(
        <div id="media" className={className}>
            <p>
                At AVVIC, we ensure to give you the best possible results for your time
                As such, we prioritise customer satisfacton. 
                
                    <br />

                To ensure your satisfaction, and to keep with our latest trends, don't fail to follow below!
            </p>

            <div className="contact-socials">
                <a href="" target="_blank"><i className="fa-brands fa-facebook fa-2x"></i> Facebook</a>
                <a href="" target="_blank"><i className="fa-brands fa-instagram fa-2x"></i> Instagram</a>
                <a href="" target="_blank"><i className="fa-brands fa-twitter fa-2x"></i> Twitter</a>
                <a href="" target="_blank"><i className="fa-brands fa-linkedin fa-2x"></i> LinkedIn</a>
            </div>
        </div>
    )
}

export default ContactMedia