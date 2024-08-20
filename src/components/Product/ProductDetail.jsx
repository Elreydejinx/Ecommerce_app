
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, deleteProduct } from '../../api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    await deleteProduct(id);
    
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={handleDelete}>Delete Product</button>

    </div>
  );
};

export default ProductDetail;
