// src/DonationRecordForm.js
import React, { useState } from 'react';
// import './DonationRecordForm.css';

const DonationRecordForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [gateway, setGateway] = useState('');
  const [date, setDate] = useState('');
  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !gateway || !date) {
      alert('Please fill in all fields');
      return;
    }
    const newRecord = { name, amount, gateway, date };
    setRecords([...records, newRecord]);
    setName('');
    setAmount('');
    setGateway('');
    setDate('');
  };

  return (
    <div className="donation-record-form">
      <h2>Donation Record Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <label>
          Payment Gateway:
          <input
            type="text"
            value={gateway}
            onChange={(e) => setGateway(e.target.value)}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Record</button>
      </form>
      <div className="records-list">
        <h3>Donation Records</h3>
        {records.length === 0 ? (
          <p>No records yet</p>
        ) : (
          <ul>
            {records.map((record, index) => (
              <li key={index}>
                <strong>Name:</strong> {record.name}, <strong>Amount:</strong> ${record.amount}, <strong>Gateway:</strong> {record.gateway}, <strong>Date:</strong> {record.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DonationRecordForm;
