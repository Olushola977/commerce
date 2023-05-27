import React, { createContext, useEffect, useState } from 'react';

export const OrdersContext = createContext();

const OrdersContextProvider = (props) => {
  const [limitedOrders, setLimitedOrders] = useState([]);
  const orders = [
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Completed',
      items: '2 Items',
      total: '3,500',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Pending',
      items: '3 Items',
      total: '38,200',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Cancelled',
      items: '8 Items',
      total: '1,800',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Awaiting Pick-Up',
      items: '7 unit',
      total: '1,200',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Shipped',
      items: '3 unit',
      total: '5,900',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Refunded',
      items: '24 unit',
      total: '1,200',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Partially Refunded',
      items: '5 unit',
      total: '10,700',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Completed',
      items: '4 unit',
      total: '35,000',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Pending',
      items: '12 unit',
      total: '1,200',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Cancelled',
      items: '7 unit',
      total: '1,200',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Pending',
      items: '13 unit',
      total: '25,200',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
    {
      orderId: '#123449098',
      customerName: 'Olushola Adeyeye',
      status: 'Awaiting Pick-Up',
      items: '0',
      total: '128,000',
      date: `${new Date().toJSON().slice(0, 10)}`,
    },
  ];

  useEffect(() => {
    let ltdOrders = [];
    const transaction = () => {
      for (let i = 0; i < 7; i++) {
        ltdOrders.push(orders[i]);
      }
    };
    transaction();
    setLimitedOrders(ltdOrders);
  }, []);

  const state = { orders, limitedOrders };
  return (
    <OrdersContext.Provider value={{ ...state }}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
