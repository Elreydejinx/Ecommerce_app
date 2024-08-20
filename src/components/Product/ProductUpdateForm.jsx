
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, updateProduct } from '../../api';

const ProductUpdateForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, product);
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default ProductUpdateForm;
