// src/components/Order/OrderForm.js
import React, { useState, useEffect } from 'react';
import { getProducts, createOrder } from '../../api';

const OrderForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [orderDate, setOrderDate] = useState('');
  const [customerId, setCustomerId] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleProductChange = (e) => {
    const value = e.target.value;
    setSelectedProducts(prev => [...prev, value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = { products: selectedProducts, date: orderDate, customerId };
    await createOrder(order);
    // Handle post-creation logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={orderDate}
        onChange={(e) => setOrderDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Customer ID"
        required
      />
      <select multiple onChange={handleProductChange}>
        {products.map(product => (
          <option key={product.id} value={product.id}>
            {product.name} - ${product.price}
          </option>
        ))}
      </select>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
