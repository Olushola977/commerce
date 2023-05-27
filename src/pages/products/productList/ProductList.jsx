import { EyeIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ProductsContext } from '../../../context/ProductsContext';

const ProductList = () => {
  const productsContext = useContext(ProductsContext);
  const { products } = productsContext;
  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-white text-gray-700 border-b-2 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              SKU
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Qty.
            </th>
            <th scope="col" className="px-1 py-3">
              Price (Unit)
            </th>
            <th scope="col" className="px-1 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, index) => (
              <tr className="border-b bg-white" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {item.sku}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">
                  <div
                    className={`${
                      item.stock.includes('In Stock')
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    } text-white text-center py-1 rounded font-bold`}
                  >
                    {item.stock}
                  </div>
                </td>
                <td className="px-6 py-4">{item.qty}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-1 py-4 flex gap-3">
                  <a
                    href="#"
                    className="font-medium block text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="font-medium block text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium block text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
