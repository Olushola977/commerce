const CustomerProducts = ({ orderProducts }) => {
  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-white text-gray-700 border-b-2 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Qty.
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-1 py-3">
              Price (Unit)
            </th>
          </tr>
        </thead>
        <tbody>
          {orderProducts &&
            orderProducts.map((item, index) => (
              <tr className="border-b bg-white" key={index}>
                <td className="px-3 py-2">{item.qty}</td>
                <td className="px-3 py-2">{item.name}</td>
                <td className="px-3 py-2">{item.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerProducts;
