// src/components/Product/ProductList.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../api';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
