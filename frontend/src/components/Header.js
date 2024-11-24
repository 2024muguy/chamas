import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../src/Chama.png';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false); 
  const [userInfo, setUserInfo] = useState(null); 
  const navigate = useNavigate();

  // Fetch user info if authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setUserInfo(response.data.user);
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const graffitiTitleStyle = {
    fontFamily: "'Rock Salt', cursive",
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: isHovered ? '#2C6B53' : '#1B4F3D',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
    letterSpacing: '3px',
    transition: 'all 0.3s ease-in-out',
    textDecoration: 'none',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  const headerStyle = {
    background: "url('styles/header.svg') no-repeat center center / cover",
  };

  const logoutHandler = () => {
    // Clear the token from localStorage and update the user info
    localStorage.removeItem('token');
    setUserInfo(null);
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" collapseOnSelect style={headerStyle}>
      <Container>
        <Link to="/">
          <Navbar.Brand
            style={graffitiTitleStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={logo} alt="logo" width="50" />
            {' '} Chama
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            {/* Search Form */}
            <form onSubmit={searchHandler} className="d-flex me-4">
              <input
                type="text"
                placeholder="Search..."
                className="form-control me-2"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* Navigation Links */}
            <Link to="/mission" className="nav-link">Mission</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/partners" className="nav-link">Partners</Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            {/* Authentication Logic */}
            {userInfo ? (
              <Dropdown align="end">
                <Dropdown.Toggle variant="success" id="dropdown-custom">
                  {userInfo.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to="/profile">
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </Link>
                  <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/login" className="nav-link">
                <i className="fas fa-user"></i> Sign In
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
