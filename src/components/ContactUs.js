import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yggwauk',
        'template_55jau9o',
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" placeholder="Your message" required />
      <input type="submit" value="Send message" className="send-button" />
    </form>
  );
};
