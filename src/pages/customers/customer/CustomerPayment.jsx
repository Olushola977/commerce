const CustomerPayment = () => {
  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-white text-gray-700 border-b-2 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Card Number
            </th>
            <th scope="col" className="px-1 py-3">
              Expiry
            </th>
            <th scope="col" className="px-1 py-3">
              Card Type
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white">
            <td className="px-3 py-2">Card</td>
            <td className="px-3 py-2">5604897654321234567</td>
            <td className="px-3 py-2">11/12</td>
            <td className="px-3 py-2">MasterCard</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPayment;
