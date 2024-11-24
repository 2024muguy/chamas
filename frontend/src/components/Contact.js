import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const containerStyle = {
    background: 'url("styles/contact.svg") no-repeat center center fixed',
    backgroundSize: 'cover',
    padding: '40px',
    borderRadius: '10px',
    marginTop: '20px',
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '20px',
  };

  const infoStyle = {
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  const iconStyles = {
    email: { color: '#007bff', margin: '10px', cursor: 'pointer' },
    phone: { color: '#28a745', margin: '10px', cursor: 'pointer' },
    location: { color: '#dc3545', margin: '10px', cursor: 'pointer' },
    facebook: { color: '#3b5998', margin: '10px', cursor: 'pointer' },
    twitter: { color: '#1da1f2', margin: '10px', cursor: 'pointer' },
    linkedin: { color: '#0077b5', margin: '10px', cursor: 'pointer' },
    whatsapp: { color: '#25d366', margin: '10px', cursor: 'pointer' },
    instagram: { color: '#E1306C', margin: '10px', cursor: 'pointer' },
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('https://formspree.io/f/mldedrgk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (response.ok) {
        setFormStatus('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      } else {
        setFormStatus('Oops! There was a problem with your submission. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setFormStatus('There was an error sending your message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <Container style={containerStyle}>
      <h3 className="text-center mb-4">Contact Us</h3>
      <Row className="align-items-center">
        {/* Left Side: Contact Form */}
        <Col md={6} style={formStyle}>
          <h5>We would love to hear from you!</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                name="message" 
                rows={4} 
                placeholder="Write your message" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
            {formStatus && <div className="mt-3">{formStatus}</div>}
          </Form>
        </Col>

        {/* Right Side: Contact Details */}
        <Col md={5} style={infoStyle}>
          <h5>Contact Information</h5>
          <p>
            <i className="fa fa-envelope fa-2x" style={iconStyles.email}></i>
            <a href="mailto:contact@donationsplatform.com" style={linkStyle}>
              contact@donationsplatform.com
            </a>
          </p>
          <p>
            <i className="fa fa-phone fa-2x" style={iconStyles.phone}></i>
            <a href="tel:+1234567890" style={linkStyle}>
              +1234567890
            </a>
          </p>
          <p>
            <i className="fa fa-map-marker fa-2x" style={iconStyles.location}></i>
            <a
              href="https://www.google.com/maps?q=123+Charity+St,+Nairobi,+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              123 Charity St, Nairobi, Kenya
            </a>
          </p>

          {/* Social Media Links */}
          <h5 className="mt-4">Follow Us</h5>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook-square fa-2x" style={iconStyles.facebook}></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter-square fa-2x" style={iconStyles.twitter}></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-square fa-2x" style={iconStyles.linkedin}></i>
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp fa-2x" style={iconStyles.whatsapp}></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram fa-2x" style={iconStyles.instagram}></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
