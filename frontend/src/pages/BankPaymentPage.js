import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaUniversity } from 'react-icons/fa';
import axios from 'axios';

const BankPaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBankPayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/bank/pay`, {
        amount,
        accountNumber,
      });
      if (response.data.success) {
        alert('Bank transfer successful!');
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
        backgroundColor: '#FF8C00',
        color: 'white',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '500px',
      }}
    >
      <Row className="text-center mb-4">
        <Col>
          <FaUniversity size={50} />
          <h2>Bank Transfer</h2>
        </Col>
      </Row>
      <p>Enter the amount and bank account number to proceed with a secure transfer.</p>
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
        <Form.Group controlId="formAccountNumber" className="mb-3">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="light"
          onClick={handleBankPayment}
          disabled={loading || !amount || !accountNumber}
          className="mt-3"
        >
          {loading ? 'Processing...' : 'Proceed'}
        </Button>
      </Form>
    </Container>
  );
};

export default BankPaymentPage;
