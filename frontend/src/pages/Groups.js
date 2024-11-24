import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Modal, Form, Alert } from 'react-bootstrap';
import { FaUsers, FaDollarSign, FaBusinessTime } from 'react-icons/fa';
import axios from 'axios'; // To make HTTP requests

const Groups = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const groups = [
    {
      name: "Women Entrepreneurs",
      type: "business",
      vision: "Empowering women entrepreneurs to grow their businesses.",
      members: ["Alice", "Bob"],
      achievements: "Successful business ventures, job creation.",
      goals: "To create a network of women-owned businesses.",
      image: "/images/business.PNG"
    },
    {
      name: "Community Outreach",
      type: "community",
      vision: "Building stronger communities through social engagement.",
      members: ["Charlie", "David"],
      achievements: "Organized clean-up campaigns, charity events.",
      goals: "To involve women in impactful community projects.",
      image: "/images/community.PNG"
    },
    {
      name: "Financial Literacy for Women",
      type: "financial",
      vision: "Educating women on managing their finances effectively.",
      members: ["Eve", "Frank"],
      achievements: "Conducted financial literacy workshops.",
      goals: "To increase financial literacy among women.",
      image: "/images/financial.PNG"
    }
  ];

  const handleShow = (group) => {
    setSelectedGroup(group);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleJoin = async () => {
    try {
      // Send POST request to join the group
      const response = await axios.post('/api/groups/join', {
        groupId: selectedGroup._id,  // Assuming each group has a unique _id
        user: userDetails,
      });

      // Close the modal and reset form
      setShowModal(false);
      setUserDetails({ name: '', email: '', phone: '' });

      // Optionally, update the group state or handle a success message
      dispatch({ type: 'JOIN_GROUP_SUCCESS', payload: response.data });

    } catch (err) {
      setError('Error joining the group. Please try again later.');
    }
  };

  const renderGroupIcon = (group) => {
    if (group.type === 'community') return <FaUsers />;
    if (group.type === 'financial') return <FaDollarSign />;
    if (group.type === 'business') return <FaBusinessTime />;
    return null;
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Women’s Groups and Societies</h2>
          <p>Join women-led groups or societies forming SACCOS.</p>
        </Col>
      </Row>
      <Row>
        {groups.map((group, index) => (
          <Col md={4} className="mb-3" key={index}>
            <div className="bg-white p-3 rounded shadow" style={{ borderRadius: '16px' }}>
              <Row>
                <Col md={4}>
                  <img
                    src={group.image}
                    alt={group.name}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </Col>
                <Col md={8}>
                  <h4>{renderGroupIcon(group)} {group.name}</h4>
                  <p><strong>Vision:</strong> {group.vision}</p>
                  <p><strong>Members:</strong> {group.members.length}</p>
                  <p><strong>Achievements:</strong> {group.achievements}</p>
                  <p><strong>Goals:</strong> {group.goals}</p>
                  <Button variant="success" onClick={() => handleShow(group)}>
                    + Join Group
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join {selectedGroup ? selectedGroup.name : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={userDetails.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
            <Button variant="primary" onClick={handleJoin} style={{ marginTop: '10px' }}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Groups;
