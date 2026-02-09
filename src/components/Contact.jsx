import React, { useState, useRef } from 'react';
import './Contact.css';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_howb9ac',     // Replace with your EmailJS service ID
      'template_u4xhxcu',    // Replace with your EmailJS template ID
      formRef.current,
      'NQc3n4PzKd6MSqjxa'    // Replace with your EmailJS public key
    ).then(() => {
      setIsSent(true);
      formRef.current.reset();

      setTimeout(() => {
        setIsSent(false);
      }, 2000);
    }).catch((error) => {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
  <section className="contact-section">
    <div className="contact-box">
      {isSent ? (
        <div className="sent-confirmation">
          <FaCheckCircle className="sent-icon" />
          <p>Message Sent Successfully!</p>
        </div>
      ) : (
        <>
          <h2>Contact Me</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">
              Send <FaPaperPlane />
            </button>
          </form>
        </>
      )}
    </div>
  </section>
);
}
export default Contact;
