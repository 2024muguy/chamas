import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        setError(message || 'Registration failed. Please try again.');
        return;
      }

      // If successful, navigate to the login page
      navigate('/login');
    } catch (err) {
      console.error('Error during registration:', err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#e9f9e9', // Light green background
        backgroundImage: `url('/styles/register.svg')`, // Path to your SVG pattern
        backgroundSize: 'cover', // Ensure background scales correctly
        backgroundPosition: 'center', // Center the background
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(144, 238, 144, 0.6)', // Light green shadow
          width: '100%',
          maxWidth: '400px', // Limit max width
        }}
      >
        <h2 className="text-center">Register</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group style={{ marginBottom: '20px' }}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={credentials.confirmPassword}
              onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit" block style={{ marginTop: '15px' }}>
            Register
          </Button>
          <p className="text-center" style={{ marginTop: '10px' }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
