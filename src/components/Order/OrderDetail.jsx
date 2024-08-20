// src/components/Order/OrderDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../api';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const data = await getOrderById(id);
      setOrder(data);
    };
    fetchOrder();
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h2>Order ID: {order.id}</h2>
      <p>Date: {order.date}</p>
      <h3>Products:</h3>
      <ul>
        {order.products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default OrderDetail;
