import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { setPartners } from '../actions/partnersActions';


const Partners = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partners.data);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        // Try fetching data from the API
        const { data } = await axios.get('/api/partners');
        if (data.length > 0) {
          dispatch(setPartners(data)); // Dispatch action to set partners data in Redux
        } else {
          // Fallback to the public folder if no data is returned from the API
          const fallbackData = await axios.get('/partners.json');
          dispatch(setPartners(fallbackData.data));
        }
      } catch (error) {
        console.error('Error fetching data from API, falling back to local file:', error);
        try {
          // Fetch data from the public folder in case of an API error
          const fallbackData = await axios.get('/partners.json');
          dispatch(setPartners(fallbackData.data));
        } catch (fallbackError) {
          console.error('Error fetching fallback data:', fallbackError);
        }
      }
    };

    fetchPartners();
  }, [dispatch]);

  return (
    <Container
      className="partners-page py-5"
      style={{
        backgroundImage: `url('/styles/partners.svg')`, // Path to your SVG pattern
        backgroundSize: 'cover', // Ensure background scales correctly
        backgroundPosition: 'center', // Center the background
      }}
    >
      <h1 className="text-center mb-4">Our Partners</h1>
      <Row className="g-4">
        {partners.map((partner) => (
          <Col xs={12} sm={6} md={4} lg={3} key={partner._id || partner.id}>
            <Card style={{ height: '100%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <Card.Img
                variant="top"
                src={partner.logo}
                alt={partner.name}
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <Card.Body style={{ padding: '1.5rem' }}>
                <Card.Title>{partner.name}</Card.Title>
                <Card.Text>{partner.description}</Card.Text>
                <Button
                  variant="primary"
                  href={partner.website}
                  target="_blank"
                  style={{ marginTop: '1rem' }}
                >
                  Visit Website
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Partners;
