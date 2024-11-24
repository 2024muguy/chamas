// src/components/DonationList.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const RealTimeDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    socket.on('donationUpdate', (donation) => {
      setDonations((prevDonations) => [...prevDonations, donation]);
    });
    return () => socket.disconnect();
  }, []);

  const data = {
    labels: donations.map((donation) => new Date(donation.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Donations',
        data: donations.map((donation) => donation.amount),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Real-Time Donations</h2>
      <Line data={data} />
    </div>
  );
};

export default RealTimeDonations;
