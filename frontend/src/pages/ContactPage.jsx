import React from 'react'
import ContactForm from '../components/contactUs/contactForm'
import Banner from '../components/Banner'
import banner from "../assets/about1.jpg"
import Footer from '../components/home/Footer'
const ContactPage = () => {
    return (
        <div className='pt-[4%]'>
            <Banner backgroundImage={banner} title="Contact Us" />

            <ContactForm />
            <Footer />
        </div>
    )
}

export default ContactPage
