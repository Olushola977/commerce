import { EyeIcon } from '@heroicons/react/24/solid';
import Button from '../../../components/button/Button';

const RecentOrders = () => {
  const tableHead = [
    'Id',
    'Customer Name',
    'Order Date',
    'Order Cost',
    'Status',
    // 'Action',
  ];

  const tableContent = [
    {
      id: '23456',
      customer: 'Adeyeye Olushola',
      date: '3/1/2023',
      amount: '43,000',
      status: 'completed',
    },
    {
      id: '23457',
      customer: 'Adeyeye Wuraola',
      date: '3/1/2023',
      amount: '68,700',
      status: 'cancelled',
    },
    {
      id: '23458',
      customer: 'Adeyeye Maxi',
      date: '5/1/2023',
      amount: '60,500',
      status: 'completed',
    },
    {
      id: '23459',
      customer: 'Eludire Damilola',
      date: '5/1/2023',
      amount: '13,000',
      status: 'pending',
    },
    {
      id: '23460',
      customer: 'Adeyeye Simeon',
      date: '7/1/2023',
      amount: '105,000',
      status: 'completed',
    },
    {
      id: '23461',
      customer: 'Adeyeye Wuraola',
      date: '3/1/2023',
      amount: '12,200',
      status: 'completed',
    },
    {
      id: '23462',
      customer: 'Adeyeye Olushola',
      date: '3/1/2023',
      amount: '4,500',
      status: 'pending',
    },
    {
      id: '23463',
      customer: 'Adeyeye Maxi',
      date: '5/1/2023',
      amount: '1,500',
      status: 'cancelled',
    },
    {
      id: '23464',
      customer: 'Eludire Damilola',
      date: '5/1/2023',
      amount: '39,000',
      status: 'completed',
    },
    {
      id: '23465',
      customer: 'Adeyeye Simeon',
      date: '7/1/2023',
      amount: '11,000',
      status: 'pending',
    },
  ];
  return (
    <div className="relative overflow-x-auto sm:rounded-lg mt-6">
      <table className="w-full text-sm text-center text-gray-600">
        <thead className="text-md text-gray-600 uppercase border-b-2">
          <tr>
            {tableHead &&
              tableHead.map((item, index) => (
                <th key={index} scope="col" className="px-3 py-2">
                  {item}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableContent &&
            tableContent.map((item, index) => (
              <tr key={index} className="bg-white border-b">
                <th scope="row" className="px-6 py-4">
                  {item.id}
                </th>
                <td className="px-3 py-2">{item.customer}</td>
                <td className="px-3 py-2">{item.date}</td>
                <td className="px-3 py-2">${item.amount}</td>
                <td className="px-3 py-2">
                  <span
                    className={`${
                      item.status === 'completed'
                        ? 'bg-green-600'
                        : item.status === 'pending'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    } text-white p-2 block rounded-lg text-center w-full capitalize font-semibold`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="pl-5 py-2">
                  <EyeIcon className="w-5 h-5 text-slate-400" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
