import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomersContext } from '../../../context/CustomersContext';

const CustomersList = () => {
  const navigate = useNavigate();
  const customerContext = useContext(CustomersContext);
  const { customers } = customerContext;
  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-white text-gray-700 border-b-2 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-1 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((item, index) => (
              <tr className="border-b bg-white" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-1 py-4 flex gap-3">
                  <EyeIcon
                    onClick={() => {
                      navigate(`/customers/${item.id}`);
                    }}
                    className="w-4 h-4 block text-blue-800 cursor-pointer"
                  />
                  <PencilSquareIcon className="w-4 h-4 block text-yellow-800 cursor-pointer" />
                  <TrashIcon className="w-4 h-4 block text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;
