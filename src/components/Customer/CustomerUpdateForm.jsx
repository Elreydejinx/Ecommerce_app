// src/components/Customer/CustomerUpdateForm.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerById, updateCustomer } from '../../api';

const CustomerUpdateForm = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const fetchCustomer = async () => {
      const data = await getCustomerById(id);
      setCustomer(data);
    };
    fetchCustomer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCustomer(id, customer);
    // Handle post-update logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={customer.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={customer.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="phone"
        value={customer.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">Update Customer</button>
    </form>
  );
};

export default CustomerUpdateForm;
