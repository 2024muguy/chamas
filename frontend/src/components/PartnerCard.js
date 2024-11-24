import React from 'react';

const PartnerCard = ({ partner }) => {
  return (
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
  );
};

export default PartnerCard;
