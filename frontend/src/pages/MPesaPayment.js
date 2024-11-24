import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaMobileAlt } from 'react-icons/fa';
import axios from 'axios';

const MPesaPayment = () => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleMPesaPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/mpesa/pay`, {
        amount,
        phoneNumber,
      });

      if (response.data.success) {
        alert('Payment request sent. Please complete the payment on your phone.');
        setPaymentStatus('Payment Initiated');
      } else {
        alert('Payment failed to initiate. Please try again.');
        setPaymentStatus('Payment Failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment error. Please try again later.');
      setPaymentStatus('Payment Failed');
    }
    setLoading(false);
  };

  return (
    <Container
      style={{
        backgroundColor: '#25D366',
        color: 'white',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '500px',
      }}
    >
      <Row className="text-center mb-4">
        <Col>
          <FaMobileAlt size={50} />
          <h2>M-Pesa Payment</h2>
        </Col>
      </Row>
      <p>Enter the amount and phone number to proceed with an M-Pesa STK Push.</p>
      <Form>
        <Form.Group controlId="formAmount" className="mb-3">
          <Form.Label>Amount (KSh)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="light"
          onClick={handleMPesaPayment}
          disabled={loading || !amount || !phoneNumber}
          className="mt-3"
        >
          {loading ? 'Processing...' : 'Proceed'}
        </Button>
      </Form>

      {paymentStatus && (
        <div className="mt-4">
          <h5>Status: {paymentStatus}</h5>
        </div>
      )}
    </Container>
  );
};

export default MPesaPayment;
