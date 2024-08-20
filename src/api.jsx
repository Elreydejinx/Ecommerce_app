
const API_BASE_URL = 'http://localhost:5000'; 


export const getCustomerById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/customers/${id}`);
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const createCustomer = async (customer) => {
  const response = await fetch(`${API_BASE_URL}/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customer),
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const updateCustomer = async (id, customer) => {
  const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customer),
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const deleteCustomer = async (id) => {
  const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};


export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};


export const getOrderById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`);
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const createOrder = async (order) => {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const getLowStockProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products/low-stock`);
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const restockProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/restock/${id}`, {
    method: 'POST',
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};
