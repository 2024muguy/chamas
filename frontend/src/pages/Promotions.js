import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Promotions = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Support Us Through Our Paid Adverts</h2>
          <p>Explore promotions that support our mission.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <div className="bg-white p-3 rounded shadow">
            <h4>Perfumes</h4>
            <p>Elegant fragrances that uplift and inspire.</p>
            <Button variant="info" href="/promotions/perfumes">
              Explore
            </Button>
          </div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="bg-white p-3 rounded shadow">
            <h4>Massage Services</h4>
            <p>Relax and recharge with our exclusive services.</p>
            <Button variant="info" href="/promotions/massage">
              Discover
            </Button>
          </div>
        </Col>
        <Col md={4} className="mb-3">
          <div className="bg-white p-3 rounded shadow">
            <h4>Fashion</h4>
            <p>Stay stylish while supporting a good cause.</p>
            <Button variant="info" href="/promotions/fashion">
              Browse
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Promotions;
