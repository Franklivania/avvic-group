import React from 'react'
import './ContactForm.scss'
import Input from '../Input/Input'

const ContactForm = ({className}) => {
  return (
    <form action="" id='form' className={className}>

        <h1>Get in touch with us</h1>

        <label htmlFor="">
            <h4>Full Name</h4>
            <Input type={"text"} name={"name"} placeholder={"Your full name"} className={"input"}/>
        </label>

        <label htmlFor="">
            <h4>Email Address</h4>
            <Input type={"email"} name={"email"} placeholder={"Your Email Address"} className={"input"}/>
        </label>

        <label htmlFor="">
            <h4>Phone Number</h4>
            <Input type={"tel"} name={"phone"} placeholder={"Your Phone Number"} className={"input"}/>
        </label>

        <label htmlFor="">
            <h4>Your Message</h4>
            <textarea name="message" id="message" placeholder='Your message please'></textarea>
        </label>

        <Input type={"submit"} value={"SUBMIT"} className={"submit"}/>
    </form>
  )
}

export default ContactForm