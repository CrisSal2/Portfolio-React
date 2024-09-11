import React, { useState } from 'react';
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form inputs
  function validateForm() {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      // Send data to backend or API
      console.log(formData);
      
      // Simulate sending to the server
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 1000);
    }
  };

  return (
    <div className="contact-form-container">
      {isSubmitted ? (
        <div className="form-success">
          <h2>Thank you! Your message has been sent.</h2>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={formErrors.name ? 'input-error' : ''}
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={formErrors.email ? 'input-error' : ''}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={formErrors.message ? 'input-error' : ''}
            ></textarea>
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;