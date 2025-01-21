import React, { useState } from 'react';

const ContactUs = () => {
    // State to handle form input
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name && formData.email && formData.message) {
        setSuccessMessage('Thank you for reaching out to us! We will get back to you shortly.');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage('Please fill out all the fields.');
        setSuccessMessage('');
      }
    };
      return (
        <div className="container my-5 rounded shadow-lg " >
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center mb-4"style={{color:"#020f5f"}}>Contact Us</h1>
  
            {/* Display Success Message */}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
  
            {/* Display Error Message */}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
  
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
  
        {/* Contact Information Section */}
        <div className="row mt-5 shadow-lg p-2 rounded-2 w-75 mx-auto" style={{color:"#020f5f",border:"1px solid #020f5f"}}>
          <div className="col-12 text-center">
            <h2>Visit Us or Call Us</h2>
            <p>We are available 24/7 to assist you with any questions or inquiries.</p>
          </div>
  
          <div className="col-md-4 mb-3">
            <h4>Address</h4>
            <p>SwiftMart Inc., 123 E-Commerce Street, City, Country</p>
          </div>
  
          <div className="col-md-4 mb-3">
            <h4>Phone</h4>
            <p>+1 (123) 456-7890</p>
          </div>
  
          <div className="col-md-4 mb-3">
            <h4>Email</h4>
            <p>support@swiftmart.com</p>
          </div>
        </div>
      </div>
    );
  };

export default ContactUs
