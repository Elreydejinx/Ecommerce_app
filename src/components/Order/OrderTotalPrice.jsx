// src/components/Order/OrderTotalPrice.jsx
import React, { useState, useEffect } from 'react';
import { getOrderById } from '../../api'; // Make sure this API function exists

const OrderTotalPrice = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);

  const calculateTotalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  const handleCalculate = async () => {
    const data = await getOrderById(orderId);
    setOrder(data);
  };

  return (
    <div>
      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Enter Order ID"
      />
      <button onClick={handleCalculate}>Calculate Total Price</button>

      {order && (
        <div>
          <h2>Order ID: {order.id}</h2>
          <p>Total Price: ${calculateTotalPrice(order.products)}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTotalPrice;
