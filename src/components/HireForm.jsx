// HireForm.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './HireForm.css'; // Make sure this file exists with styles

const HireForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Log form data for debugging
    const formData = new FormData(formRef.current);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    emailjs.sendForm(
      'service_howb9ac',       // Your EmailJS service ID
      'template_wwtjkqd',      // Your EmailJS template ID
      formRef.current,
      'NQc3n4PzKd6MSqjxa'      // Your EmailJS public key
    )
    .then(() => {
      console.log('Email sent successfully');
      setShowMessage(true);
      formRef.current.reset();  // Reset the form

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  };

  return (
    <div className="hire-container">
      <form className="hire-form" onSubmit={handleSubmit} ref={formRef}>
        <input
          name="name"
          type="text"
          placeholder="Enter your name..."
          required
        />
        <input
          name="company"
          type="text"
          placeholder="Enter your company name / contact number..."
          required
        />
        <input
          name="role"
          type="text"
          placeholder="Enter my role..."
          required
        />
        <button type="submit">SUBMIT</button>
      </form>

      <div className="hire-quote">"I'll enjoy working with you"</div>

      {showMessage && (
        <div className="success-message">
          I will respond to you very soon!
        </div>
      )}
    </div>
  );
};

export default HireForm;
