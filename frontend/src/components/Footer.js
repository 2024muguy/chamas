import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{
      background: "url('styles/header.svg') no-repeat center center / cover",
      backgroundRepeat: 'repeat', 
      position: 'fixed', 
      bottom: 0, 
      width: '100%',
      left: 0, 
      padding: '1rem 0', 
    }} className="text-center">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">&copy; 2024 Chama. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
