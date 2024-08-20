
import React from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerById, deleteCustomer } from '../../api';

const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = React.useState(null);

  React.useEffect(() => {
    const fetchCustomer = async () => {
      const data = await getCustomerById(id);
      setCustomer(data);
    };
    fetchCustomer();
  }, [id]);

  const handleDelete = async () => {
    await deleteCustomer(id);

  };

  if (!customer) return <p>Loading...</p>;

  return (
    <div>
      <h2>{customer.name}</h2>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <button onClick={handleDelete}>Delete Customer</button>
     
    </div>
  );
};

export default CustomerDetail;
