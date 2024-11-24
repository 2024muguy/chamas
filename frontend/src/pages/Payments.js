import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaMobileAlt, FaPaypal, FaUniversity } from 'react-icons/fa';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('donate');
  const location = useLocation();

  const isChildrenDonation = location.pathname.includes('children-home') || location.pathname.includes('street-children');

  return (
    <Container style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{isChildrenDonation ? 'Donate to Support Vulnerable Children' : 'Select an Option'}</h2>
      <Tab.Container activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="donate">Donate</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="items">Donate Items</Nav.Link> {/* New Tab for Donate Items */}
          </Nav.Item>
        </Nav>

        <Tab.Content className="mt-4">
          {/* Donate Tab */}
          <Tab.Pane eventKey="donate">
            <h3>Choose a Payment Method</h3>
            <Row className="justify-content-center">
              <Col md={4} className="text-center mb-3">
                <Link to="/mpesa">
                  <Button variant="success" className="w-100">
                    <FaMobileAlt className="me-2" /> M-Pesa
                  </Button>
                </Link>
              </Col>
              <Col md={4} className="text-center mb-3">
                <Link to="/paypal">
                  <Button variant="info" className="w-100">
                    <FaPaypal className="me-2" /> PayPal
                  </Button>
                </Link>
              </Col>
              <Col md={4} className="text-center mb-3">
                <Link to="/bank">
                  <Button variant="warning" className="w-100">
                    <FaUniversity className="me-2" /> Bank Transfer
                  </Button>
                </Link>
              </Col>
            </Row>
          </Tab.Pane>

          {/* Donate Items Tab */}
          <Tab.Pane eventKey="items">
            <h3>Choose Items to Donate</h3>
            <Row className="justify-content-center">
              <Col md={4} className="text-center mb-3">
                <Link to="/clothing">
                  <Button variant="outline-success" className="w-100">
                    Clothing
                  </Button>
                </Link>
              </Col>
              <Col md={4} className="text-center mb-3">
                <Link to="/food">
                  <Button variant="outline-warning" className="w-100">
                    Food
                  </Button>
                </Link>
              </Col>
              <Col md={4} className="text-center mb-3">
                <Link to="/toys">
                  <Button variant="outline-info" className="w-100">
                    Toys
                  </Button>
                </Link>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Payments;
