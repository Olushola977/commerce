import React, { createContext, useState } from 'react';

export const CustomersContext = createContext();

const CustomersContextProvider = (props) => {
  const customers = [
    {
      id: 'WaXa71juTQrjgIEg5tWFj',
      name: 'Neil Sims',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'neilsims@smile.com',
    },
    {
      id: 'ymx79Y88EAAwFKjnabrSZ',
      name: 'Bonnie Green',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'bonniegreen@smile.com',
    },
    {
      id: 'Bve2YQV2qftvhgx1eELL6',
      name: 'Michael Gough',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
      email: 'michaelgough@smile.com',
    },
    {
      id: 'YILThhmzwpPkgZCq29F74',
      name: 'Neil Sims',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'neilsims@smile.com',
    },
    {
      id: 'PKqwwwnEHs14ggdJpENIb',
      name: 'Bonnie Green',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'bonniegreen@smile.com',
    },
    {
      id: 'DZYqRcmZ93eiF9DtxoLkJ',
      name: 'Michael Gough',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
      email: 'michaelgough@smile.com',
    },
    {
      id: 'sNXd3x9cmJTczszVm8ySF',
      name: 'Neil Sims',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'neilsims@smile.com',
    },
    {
      id: 'f3IZeU1t96YSb98YUhQnh',
      name: 'Bonnie Green',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'bonniegreen@smile.com',
    },
    {
      id: '67GGZgXGcADUpTfE9xxke',
      name: 'Michael Gough',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
      email: 'michaelgough@smile.com',
    },
    {
      id: 'oYZ7fa1VGqjrHpO15tHBX',
      name: 'Neil Sims',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'neilsims@smile.com',
    },
    {
      id: 'jBtcNmUBUKlD1k9ocGHlf',
      name: 'Bonnie Green',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'bonniegreen@smile.com',
    },
    {
      id: '5QpvEWTWKX909g97eRUvp',
      name: 'Michael Gough',
      phone: '08090000001',
      address: '28, Abraham Bamisegun Avenue, Ipaja, Lagos',
      img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
      email: 'michaelgough@smile.com',
    },
  ];

  const handleCustomerSearch = (id) => {
    return customers.find((el) => (el.id === id ? el : ''));
  };

  const state = { customers, handleCustomerSearch };
  return (
    <CustomersContext.Provider value={{ ...state }}>
      {props.children}
    </CustomersContext.Provider>
  );
};

export default CustomersContextProvider;
