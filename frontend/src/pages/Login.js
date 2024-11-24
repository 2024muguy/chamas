import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const { message } = await response.json();
        setError(message || 'Invalid email or password.');
        return;
      }

      const data = await response.json();
      setIsAuthenticated(true);
      localStorage.setItem('token', data.token); // Save the token for authenticated requests
      navigate('/'); // Redirect to the home page or dashboard
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Pass the token for backend validation
        },
      });
  
      if (!response.ok) {
        const { message } = await response.json();
        alert(message || 'Failed to logout. Please try again.');
        return;
      }
  
      // Clear the token from localStorage and reset authentication state
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      alert('Successfully logged out!');
      navigate('/login'); // Redirect to the login page
    } catch (err) {
      console.error('Logout error:', err);
      alert('An error occurred during logout. Please try again.');
    }
  };
  

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f1f9ff', // Light background color
        backgroundImage: `url('/styles/login.svg')`, // Path to your SVG pattern
        backgroundSize: 'cover', // Ensure background scales correctly
        backgroundPosition: 'center', // Center the background
      }}
    >
      {isAuthenticated ? (
        <div>
          <h2>Welcome Back!</h2>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(173, 216, 230, 0.6)', // Light blue shadow
            width: '100%',
            maxWidth: '400px', // Limit max width
          }}
        >
          <h2 className="text-center">Login</h2>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" block style={{ marginTop: '15px' }}>
              Login
            </Button>
            <p className="text-center" style={{ marginTop: '10px' }}>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default Login;
