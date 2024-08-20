
import React, { useState} from 'react';
import { getOrderById } from '../../api';

const OrderStatus = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);

  const handleCheckStatus = async () => {
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
      <button onClick={handleCheckStatus}>Check Status</button>

      {order && (
        <div>
          <h2>Order ID: {order.id}</h2>
          <p>Status: {order.status}</p>
        </div>
      )}
    </div>
  );
};

export default OrderStatus;
