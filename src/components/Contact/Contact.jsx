import React, { Component } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mnnujy2', 'template_ox27t45', form.current , 'xbRDRf-zlXDWJOuu7')

        e.target.reset();
    };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Us</h2>

            <div className="container contact__container">
                <div className="contact_options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>nirmaltoys@gmail.com</h5>
                        <a href="mailto:nirmaltoys@gmail.com" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>vinaymaggidi</h5>
                        <a href="https://m.me/vinay.maggidi" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+91 9347759131</h5>
                        <a href="https://api.whatsapp.com/send?phone=+91-9347759131" target='_blank'>Send a message</a>
                    </article>
                    {/* https://api.whatsapp.com/send?phone=+91-9347759131 */}
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;