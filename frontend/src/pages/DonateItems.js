import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DonateItems = ({ category }) => {
  return (
    <Container
      style={{
        padding: '2rem',
        background: `url('/styles/items.svg') repeat`, // Replace with actual SVG pattern path
        backgroundSize: 'cover', // Ensures the pattern covers the container
      }}
    >
      <h2 className="text-center mb-4" style={{ color: '#333' }}>
        Donate {category}
      </h2>
      <Row className="mt-4 justify-content-center">
        {/* Sample item cards for donating clothing */}
        <Col md={4} className="mb-3">
          <Card
            className="shadow-sm"
            style={{
              border: 'none',
              borderRadius: '15px',
              background: '#f9f9f9',
              boxShadow:
                '4px 4px 15px rgba(0, 0, 0, 0.1), -4px -4px 15px rgba(255, 255, 255, 0.6)',
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold' }}>Used Clothing</Card.Title>
              <Card.Text>
                Donate gently used clothing to help children and families in need.
              </Card.Text>
              <Link to={`/donate-items/${category}/clothing-details`}>
                <Button variant="success" style={{ borderRadius: '20px' }}>
                  Donate Used Clothing
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Additional item donation cards */}
        <Col md={4} className="mb-3">
          <Card
            className="shadow-sm"
            style={{
              border: 'none',
              borderRadius: '15px',
              background: '#f9f9f9',
              boxShadow:
                '4px 4px 15px rgba(0, 0, 0, 0.1), -4px -4px 15px rgba(255, 255, 255, 0.6)',
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold' }}>New Toys</Card.Title>
              <Card.Text>
                Donate new toys to bring joy to children in vulnerable communities.
              </Card.Text>
              <Link to={`/donate-items/${category}/toys-details`}>
                <Button variant="info" style={{ borderRadius: '20px' }}>
                  Donate New Toys
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Add more categories */}
        <Col md={4} className="mb-3">
          <Card
            className="shadow-sm"
            style={{
              border: 'none',
              borderRadius: '15px',
              background: '#f9f9f9',
              boxShadow:
                '4px 4px 15px rgba(0, 0, 0, 0.1), -4px -4px 15px rgba(255, 255, 255, 0.6)',
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold' }}>
                Non-Perishable Food
              </Card.Title>
              <Card.Text>
                Provide non-perishable food to support families in need.
              </Card.Text>
              <Link to={`/donate-items/${category}/food-details`}>
                <Button variant="warning" style={{ borderRadius: '20px' }}>
                  Donate Non-Perishable Food
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateItems;
