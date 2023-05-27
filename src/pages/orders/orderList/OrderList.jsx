import { EyeIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import Drawer from '../../../components/drawer/Drawer';
import { OrdersContext } from '../../../context/OrdersContext';

const OrderList = () => {
  const ordersContext = useContext(OrdersContext);
  const { orders } = ordersContext;
  const [showDrawer, setShowDrawer] = useState(false);
  const openDrawer = () => {
    setShowDrawer(true);
  };
  const closeDrawer = () => {
    setShowDrawer(false);
  };

  console.log(showDrawer);
  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-white text-gray-700 border-b-2 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3">
              Items
            </th>
            <th scope="col" className="px-1 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Order Date
            </th>
            <th scope="col" className="px-1 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((item, index) => (
              <tr className="border-b bg-white" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.orderId}
                </th>
                <td className="px-6 py-4">{item.customerName}</td>
                <td className="px-6 py-4">{item.items}</td>
                <td className="px-6 py-4">{item.total}</td>
                <td className="px-6 py-4">
                  <div
                    className={`${
                      item.status.includes('Completed')
                        ? 'bg-green-700'
                        : item.status.includes('Pending')
                        ? 'bg-yellow-500'
                        : item.status === 'Refunded'
                        ? 'bg-green-400'
                        : item.status === 'Partially Refunded'
                        ? 'bg-yellow-300'
                        : item.status.includes('Awaiting')
                        ? 'bg-orange-300'
                        : 'bg-red-500'
                    } text-white text-center py-1 rounded font-bold`}
                  >
                    {item.status}
                  </div>
                </td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-1 py-4 flex gap-3">
                  <button
                    class="font-medium block text-blue-600 dark:text-blue-500 hover:underline"
                    type="button"
                    onClick={openDrawer}
                  >
                    View
                  </button>

                  <a
                    href="#"
                    className="font-medium block text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {showDrawer && <Drawer show={showDrawer} close={closeDrawer} />}
    </div>
  );
};

export default OrderList;
