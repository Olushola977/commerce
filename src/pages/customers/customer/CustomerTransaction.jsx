import { EyeIcon } from '@heroicons/react/24/solid';

const CustomerTransactions = ({ tableHead, tableContent }) => {
  const handleTransactionDetails = () => {};
  return (
    <div className="relative overflow-x-auto sm:rounded-lg mt-4">
      <table className="w-full text-sm text-center text-gray-600">
        <thead className="text-md text-gray-600 uppercase border-b">
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
                <td className="px-3 py-2">{item.date}</td>
                <th scope="row" className="px-6 py-4">
                  {item.orderId}
                </th>
                <td className="px-3 py-2">${item.total}</td>
                <td className="px-3 py-2">
                  <span
                    className={`${
                      item.status.includes('Completed')
                        ? 'text-green-700'
                        : item.status.includes('Pending')
                        ? 'text-yellow-500'
                        : item.status === 'Refunded'
                        ? 'text-green-400'
                        : item.status === 'Partially Refunded'
                        ? 'text-yellow-300'
                        : item.status.includes('Awaiting')
                        ? 'text-orange-300'
                        : 'text-red-500'
                    } text-center py-1 font-semibold`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="pl-5 py-2">
                  <EyeIcon
                    className="w-5 h-5 text-slate-400"
                    onClick={handleTransactionDetails(item.orderId)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTransactions;
