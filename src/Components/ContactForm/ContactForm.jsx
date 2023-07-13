import React from 'react'
import './ContactForm.scss'
import Input from '../Input/Input'

const ContactForm = ({className}) => {
  return (
    <form action="" id='form' className={className}>

        <h1>Get in touch with us</h1>

        <label htmlFor="">
            <h5>Full Name</h5>
            <Input type={"text"} name={"name"} placeholder={"Your full name"} className={"input"}/>
        </label>

        <label htmlFor="">
            <h5>Email Address</h5>
            <Input type={"email"} name={"email"} placeholder={"Your Email Address"} className={"input"}/>
        </label>

        <label htmlFor="">
            <h5>Phone Number</h5>
            <Input type={"tel"} name={"phone"} placeholder={"Your Phone Number"} className={"input"}/>
        </label>

        <label htmlFor="">
            <h5>Your Message</h5>
            <textarea name="message" id="message" placeholder='Your message please'></textarea>
        </label>

        <Input type={"submit"} value={"SUBMIT"} className={"submit"}/>
    </form>
  )
}

export default ContactForm