import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get('/api/events');
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Container
      className="events-page py-5"
      style={{
        backgroundImage: `url('/styles/events.svg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-center mb-4">Upcoming Events</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-evenly',
        }}
      >
        {events.length > 0 ? (
          events.map((event) => (
            <Card
              key={event.id}
              style={{
                width: '18rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <Card.Img
                variant="top"
                src={event.image}
                alt={event.title}
                style={{ height: '10rem', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {event.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {new Date(event.date).toLocaleDateString()}
                </Card.Subtitle>
                <Card.Text style={{ marginBottom: '1.5rem' }}>
                  {event.description}
                </Card.Text>
                <Button
                  variant="primary"
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '100%' }}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-center">No events found. Please check back later.</p>
        )}
      </div>
    </Container>
  );
};

export default Events;
