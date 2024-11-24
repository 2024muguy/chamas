import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClothingDetails = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({ title: '', price: '', image: '', date: '' });

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setShowModal(false);
    // Send notification via Formspree
    sendEmailNotification(newItem);
  };

  const sendEmailNotification = (item) => {
    const formData = new FormData();
    formData.append('name', 'New Item Added');
    formData.append('email', 'recipient@example.com'); // Formspree email
    formData.append('message', `A new ${item.title} has been added with price: ${item.price}`);
    
    fetch('https://formspree.io/f/yourFormEndpoint', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log("Email sent successfully", data);
      })
      .catch(error => console.error("Error sending email", error));
  };

  return (
    <Container style={{ padding: '2rem' }}>
      <h2>Donate Clothing</h2>
      <Row className="mt-4">
        {items.map((item, index) => (
          <Col md={4} className="mb-3" key={index}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: {item.price}</Card.Text>
                <Card.Text>Date Added: {item.date}</Card.Text>
                <Link to="/payments">
                  <Button variant="success">Buy</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="primary" onClick={() => setShowModal(true)}>+ Add Item</Button>

      {/* Modal to add item */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Clothing Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Item title" value={newItem.title} onChange={e => setNewItem({...newItem, title: e.target.value})} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Item price" value={newItem.price} onChange={e => setNewItem({...newItem, price: e.target.value})} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="Image URL" value={newItem.image} onChange={e => setNewItem({...newItem, image: e.target.value})} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date Added</Form.Label>
              <Form.Control type="date" value={newItem.date} onChange={e => setNewItem({...newItem, date: e.target.value})} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddItem}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ClothingDetails;
