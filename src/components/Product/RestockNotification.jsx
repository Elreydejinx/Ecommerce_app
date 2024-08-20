
import React, { useState, useEffect } from 'react';
import { getLowStockProducts, restockProduct } from '../../api';

const RestockNotification = () => {
  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    const fetchLowStockProducts = async () => {
      const products = await getLowStockProducts();
      setLowStockProducts(products);
    };
    fetchLowStockProducts();
  }, []);

  const handleRestock = async (productId) => {
    await restockProduct(productId);
    
  };

  return (
    <div>
      <h2>Low Stock Products</h2>
      <ul>
        {lowStockProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.stock} in stock
            <button onClick={() => handleRestock(product.id)}>Restock</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestockNotification;
