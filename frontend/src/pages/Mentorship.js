import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Mentorship = () => {
  return (
    <Container
      className="mt-4 p-4"
      style={{
        background: `url('/styles/play.svg') repeat`, // Replace with your SVG pattern file path
        backgroundSize: 'cover', // Ensure pattern scales properly
        borderRadius: '15px',
      }}
    >
      <Row className="mb-4">
        <Col>
          <h2 style={{ color: '#333', fontWeight: 'bold' }}>
            Mentorship Sessions on Investment Opportunities
          </h2>
          <p style={{ color: '#555' }}>
            Join our video mentorship sessions to help women become financially independent.
          </p>
          <Button
            variant="primary"
            href="/mentorship"
            style={{ borderRadius: '20px', fontWeight: 'bold' }}
          >
            Join a Mentorship Session
          </Button>
        </Col>
      </Row>
      <Row>
        {/* First mentorship session */}
        <Col md={6} className="mb-3">
          <div
            className="bg-white p-3 rounded shadow"
            style={{
              borderRadius: '15px',
              boxShadow:
                '4px 4px 15px rgba(0, 0, 0, 0.1), -4px -4px 15px rgba(255, 255, 255, 0.6)',
            }}
          >
            <h4 style={{ fontWeight: 'bold' }}>Investment 101: Starting Your Journey</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/pWCq8YElJBQ"
              title="Investment 101: Starting Your Journey"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>

        {/* Second mentorship session */}
        <Col md={6} className="mb-3">
          <div
            className="bg-white p-3 rounded shadow"
            style={{
              borderRadius: '15px',
              boxShadow:
                '4px 4px 15px rgba(0, 0, 0, 0.1), -4px -4px 15px rgba(255, 255, 255, 0.6)',
            }}
          >
            <h4 style={{ fontWeight: 'bold' }}>Advanced Investment Strategies</h4>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/75b06CIL9Nk"
              title="Advanced Investment Strategies"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Mentorship;
