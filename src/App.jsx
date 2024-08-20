// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import CustomerForm from './components/Customer/CustomerForm';
import CustomerUpdateForm from './components/Customer/CustomerUpdateForm';
import CustomerDetail from './components/Customer/CustomerDetail';
import ProductList from './components/Product/ProductList';
import ProductForm from './components/Product/ProductForm';
import ProductUpdateForm from './components/Product/ProductUpdateForm';
import OrderForm from './components/Order/OrderForm';
import OrderDetail from './components/Order/OrderDetail';
import OrderStatus from './components/Order/OrderStatus';
import RestockNotification from './components/Product/RestockNotification'; 
import OrderTotalPrice from './components/Order/OrderTotalPrice'; 

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4">E-Commerce Application</h1>
        <Routes>
          
          <Route path="/customers/new" element={<CustomerForm />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/customers/update/:id" element={<CustomerUpdateForm />} />
          
          
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/update/:id" element={<ProductUpdateForm />} />

          
          <Route path="/orders/new" element={<OrderForm />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/orders/status" element={<OrderStatus />} />
          <Route path="/order/total" element={<OrderTotalPrice />} />

          
          <Route path="/restock" element={<RestockNotification />} />

          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
