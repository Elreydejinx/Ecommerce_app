// src/components/Customer/CustomerForm.js
import React, { useState } from 'react';
import { createCustomer } from '../../api';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = { name, email, phone };
    await createCustomer(customer);
    // Handle post-creation logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CustomerForm;
