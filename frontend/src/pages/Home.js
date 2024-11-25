import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Promotions from '../components/Promotions';
import Contact from '../components/Contact';

const Home = ({ registeredRole }) => {
  return (
    <Container fluid className="mt-4 bg-light">
      {/* Welcome Section */}
      <Row
        className="text-center mb-4"
        style={{
          backgroundImage: "url('/images/women.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Col
          style={{
            position: "relative",
            zIndex: 1,
            padding: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "10px",
          }}
        >
          <h1>Welcome to Chama</h1>
          <p>
            Join a community where women pool resources for economic empowerment.
          </p>
          <a href="/join"> 
          <Button variant="success" >
            Join a Chama
          </Button>
          </a>
          
        </Col>
      </Row>

      {/* Paid Adverts or Promotions Section */}
      <Row
        style={{
          background: "url('styles/charity_pattern.svg') no-repeat center center / cover",
          padding: '20px',
          borderRadius: '15px',
        }}
        className="mt-5 text-center justify-content-center"
      >
        <Col>
          <h2>Support Us Through Our Paid Adverts</h2>
          <p>
            Explore promotions that support our mission to empower women.
            Every service or product helps maintain this platform.
          </p>
        </Col>
        <Promotions />
      </Row>

      {/* Women Groups or Societies Section */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "url('styles/sacco.svg') no-repeat center center / cover",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.4,
            zIndex: -1,
          }}
        ></div>

        <Row className="mt-5 text-center">
          <Col>
            <h2>Women’s Groups and Societies</h2>
            <p>Join women-led groups or societies forming SACCOS and pooling funds for empowerment.</p>
            <Button variant="primary" href="/groups">
              Explore Groups
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={4} className="mb-3">
            <div className="bg-white p-3 rounded shadow">
              <h4>Women Empowerment SACCOS</h4>
              <p>Join a community of women saving and growing their funds together.</p>
              <Button variant="info" href="/groups/empowerment-saccos">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="bg-white p-3 rounded shadow">
              <h4>Entrepreneurship Society</h4>
              <p>Empowering women entrepreneurs through joint funding and support.</p>
              <Button variant="info" href="/groups/entrepreneurship">
                Join Now
              </Button>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="bg-white p-3 rounded shadow">
              <h4>Community Support Group</h4>
              <p>Women supporting each other in times of need and personal growth.</p>
              <Button variant="info" href="/groups/community-support">
                Discover
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Mentorship Sessions Section */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "url('styles/mentorship.svg') no-repeat center center / cover",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.4,
            zIndex: -1,
          }}
        ></div>

        <Row className="mt-5 text-center">
          <Col>
            <h2>Mentorship Sessions on Investment Opportunities</h2>
            <p>
              Watch our video mentorship sessions on various investment opportunities designed
              to help women make informed decisions and achieve financial independence.
            </p>
            <Button variant="primary" href="/mentorship">
              Join a Mentorship Session
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={6} className="mb-3">
            <div className="bg-white p-3 rounded shadow">
              <h4>Investment 101: Starting Your Journey</h4>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/your-video-id"
                title="Investment 101: Starting Your Journey"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col md={6} className="mb-3">
            <div className="bg-white p-3 rounded shadow">
              <h4>Advanced Investment Strategies</h4>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/your-video-id"
                title="Advanced Investment Strategies"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>

      {/* Donate to Children’s Homes & Street Children Section */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "url('styles/donate.svg') no-repeat center center / cover",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.4,
            zIndex: -1,
          }}
        ></div>

        <Row className="mt-5 text-center">
          <Col>
            <h2>Donate to Children’s Homes & Street Children</h2>
            <p>
              Volunteers can support vulnerable groups such as children’s homes and street children
              through donations. Your contributions make a lasting impact.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col md={4} className="mb-3">
            <div className="bg-white p-3 rounded shadow">
              <h4>Children's Home Support</h4>
              <p>Donate to children’s homes for better care and education.</p>
              {/* Redirect to /donate/children-home route */}
              <Link to={{ pathname: '/payments', state: { donationType: 'children-home' } }}>
                <Button variant="info">Donate Now</Button>
              </Link>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="bg-white p-3 rounded shadow">
              <h4>Street Children Relief</h4>
              <p>Support street children with food, shelter, and education.</p>
              {/* Redirect to /donate/street-children route */}
              <Link to={{ pathname: '/payments', state: { donationType: 'street-children' } }}>
                <Button variant="info">Help Now</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* Contact Section */}
      <Contact /> {/* Contact component */}
    </Container>
  );
};

export default Home;
