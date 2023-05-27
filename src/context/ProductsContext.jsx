import React, { createContext } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const products = [
    {
      sku: 'SKU123449098',
      name: 'School Bag',
      category: 'Bag',
      stock: 'In Stock',
      qty: '20 unit',
      price: '3,500',
    },
    {
      sku: 'SKU123449098',
      name: 'Cartier',
      category: 'Wristwatch',
      stock: 'In Stock',
      qty: '3 unit',
      price: '38,200',
    },
    {
      sku: 'SKU123449098',
      name: 'Side bag',
      category: 'Bag',
      stock: 'In Stock',
      qty: '8 unit',
      price: '1,800',
    },
    {
      sku: 'SKU123449098',
      name: 'iPhone X Phone Cover',
      category: 'Phone Accesories',
      stock: 'In Stock',
      qty: '7 unit',
      price: '1,200',
    },
    {
      sku: 'SKU123449098',
      name: 'Green Hoodie',
      category: 'Hoodie',
      stock: 'In Stock',
      qty: '3 unit',
      price: '5,900',
    },
    {
      sku: 'SKU123449098',
      name: 'T Shirt',
      category: 'Cloth',
      stock: 'In Stock',
      qty: '24 unit',
      price: '1,200',
    },
    {
      sku: 'SKU123449098',
      name: 'Brown Leather Shoe',
      category: 'Men Shoe',
      stock: 'In Stock',
      qty: '5 unit',
      price: '10,700',
    },
    {
      sku: 'SKU123449098',
      name: 'JBL Headphone',
      category: 'Headphones',
      stock: 'In Stock',
      qty: '4 unit',
      price: '35,000',
    },
    {
      sku: 'SKU123449098',
      name: 'Crystal Necklace',
      category: 'Neckchain',
      stock: 'In Stock',
      qty: '12 unit',
      price: '1,200',
    },
    {
      sku: 'SKU123449098',
      name: 'Samsung Edge',
      category: 'Phones',
      stock: 'In Stock',
      qty: '7 unit',
      price: '1,200',
    },
    {
      sku: 'SKU123449098',
      name: 'Earpod',
      category: 'Phone Accessories',
      stock: 'In Stock',
      qty: '13 unit',
      price: '25,200',
    },
    {
      sku: 'SKU123449098',
      name: 'Vivo Pro',
      category: 'Phones',
      stock: 'Out of Stock',
      qty: '0',
      price: '128,000',
    },
  ];

  const handleTransactionDetails = (id) => {
    const prod = products.find((el) => el.id === id);
    return prod;
  };

  const state = { products, handleTransactionDetails };
  return (
    <ProductsContext.Provider value={{ ...state }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
