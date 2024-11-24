import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaPaypal } from 'react-icons/fa';
import axios from 'axios';

const PayPalPayment = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayPalPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/paypal/pay`, {
        amount,
      });
      if (response.data.success) {
        alert(`Payment successful! Transaction ID: ${response.data.transactionId}`);
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment error. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <Container
      style={{
        backgroundColor: '#0070BA',
        color: 'white',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '500px',
      }}
    >
      <Row className="text-center mb-4">
        <Col>
          <FaPaypal size={50} />
          <h2>PayPal Payment</h2>
        </Col>
      </Row>
      <p>Enter the amount to proceed with a secure PayPal transaction.</p>
      <Form>
        <Form.Group controlId="formAmount" className="mb-3">
          <Form.Label>Amount (USD)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="light"
          onClick={handlePayPalPayment}
          disabled={loading || !amount}
          className="mt-3"
        >
          {loading ? 'Processing...' : 'Proceed'}
        </Button>
      </Form>
    </Container>
  );
};

export default PayPalPayment;
