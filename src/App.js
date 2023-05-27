import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomersContextProvider from './context/CustomersContext';
import OrdersContextProvider from './context/OrdersContext';
import ProductsContextProvider from './context/ProductsContext';
import Customer from './pages/customers/customer/Customer';
import Customers from './pages/customers/Customers';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './pages/layout/Layout';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';
import Header from './partials/header/Header';
import Sidebar from './partials/sidebar/Sidebar';

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="App">
      <CustomersContextProvider>
        <OrdersContextProvider>
          <ProductsContextProvider>
            <Layout>
              {/* <div className='w-20 h-screen bg-gray-800 border-r-2 p-3'></div> */}
              <Sidebar expanded={expanded} />
              <div className="w-full h-screen overflow-y-auto">
                <Header expanded={expanded} setExpanded={setExpanded} />
                <Routes>
                  <Route path="/" element={<Dashboard />}>
                    <Route path="dashboard" element={<Dashboard />} />
                  </Route>
                  <Route path="/customers">
                    <Route index element={<Customers />} />
                    <Route path=":id" element={<Customer />} />
                  </Route>
                  <Route path="/products" element={<Products />} />
                  <Route path="/orders" element={<Orders />} />
                </Routes>
                {/* < /> */}
              </div>
            </Layout>
          </ProductsContextProvider>
        </OrdersContextProvider>
      </CustomersContextProvider>
    </div>
  );
}

export default App;
