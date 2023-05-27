import { AtSymbolIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../../components/card/Card';
import { CustomersContext } from '../../../context/CustomersContext';
import { OrdersContext } from '../../../context/OrdersContext';
import { ProductsContext } from '../../../context/ProductsContext';
import CustomerTransactions from './CustomerTransaction';
import CustomerTransactionDetail from './CustomerTransactionDetails';

const Customer = () => {
  const { id: customerId } = useParams();
  const customerContext = useContext(CustomersContext);
  const { handleCustomerSearch } = customerContext;
  const ordersContext = useContext(OrdersContext);
  const { limitedOrders } = ordersContext;
  const productsContext = useContext(ProductsContext);
  const { products } = productsContext;

  const [customer, setCustomer] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    const customerToView = handleCustomerSearch(customerId);
    setCustomer(customerToView);
  }, []);
  useEffect(() => {
    let orderProducts = [];
    for (let i = 0; i < 3; i++) {
      orderProducts.push(products[i]);
    }
    setOrderProducts(orderProducts);
  }, []);
  const tableHead = ['Date', 'Id', 'Amount', 'Status'];
  return (
    <div className="px-5">
      <div>
        <span className="font-bold text-[13px]">
          Customers / Customer Detail
        </span>
      </div>
      <div className="flex mt-4 justify-between w-full">
        <div className="flex items-center w-2/4">
          <div className="w-28 h-28 rounded-full">
            <img
              src={customer.img}
              className="w-full shadow-md rounded-full object-cover h-full"
            />
          </div>
          <div className="ml-5 h-24">
            <h5 className="font-semibold text-2xl"> {customer.name}</h5>
            <h5 className="bold flex gap-3 items-center font-semibold text-slate-400">
              {' '}
              <AtSymbolIcon className="w-4 h-4" /> {customer.email}
            </h5>
            <h5 className="bold flex gap-3 items-center font-semibold text-slate-400">
              {' '}
              <PhoneIcon className="w-4 h-4" /> {customer.phone}
            </h5>
            <h5 className="bold flex gap-3 items-center text-slate-400 font-semibold">
              {' '}
              <MapIcon className="w-4 h-4" /> {customer.address}
            </h5>
          </div>
        </div>

        <div className="w-2/4 gap-3 flex justify-between">
          <Card>
            <h5 className="font-semibold text-sm text-slate-400">
              Total Amount Spent
            </h5>
            <h2 className="font-semibold text-2xl mt-1 text-slate-500">
              $120,000
            </h2>
          </Card>
          <Card>
            <h5 className="font-semibold text-sm text-slate-400">
              Transaction Count
            </h5>
            <h2 className="font-semibold text-2xl mt-1 text-slate-500">20</h2>
          </Card>
          <Card>
            <h5 className="font-semibold text-sm text-slate-400">Status</h5>
            <h2 className="font-semibold text-2xl mt-1 text-green-500">
              Whitelisted
            </h2>
          </Card>
        </div>
      </div>
      <div className="flex mt-8 gap-[1rem]">
        <div className="w-2/3">
          <h4 className="font-bold text-xl">Transactions</h4>
          <CustomerTransactions
            tableHead={tableHead}
            tableContent={limitedOrders}
          />
        </div>
        <div className="w-1/3 ">
          <CustomerTransactionDetail orderProducts={orderProducts} />
        </div>
      </div>
    </div>
  );
};

export default Customer;
