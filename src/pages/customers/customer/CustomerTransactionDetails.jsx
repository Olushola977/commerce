import CustomerPayment from './CustomerPayment';
import CustomerProducts from './CustomerProducts';

const CustomerTransactionDetail = ({ orderProducts }) => {
  return (
    <>
      <h4 className="font-bold text-md">Transaction Details</h4>
      <div className="w-full rounded-md border-2">
        <div className="bg-slate-500 text-white rounded-md flex justify-between p-5">
          <div className="flex flex-col gap-[1rem]">
            <h4 className="text-3xl font-bold">$4,500</h4>
            <span className="block font-semibold text-sm">ID: 12345678</span>
          </div>
          <div>
            <span
            // className={`bg-slate-100 font-bold text-sm rounded p-2 ${
            //   item.status.includes('Completed')
            //     ? 'text-green-700'
            //     : item.status.includes('Pending')
            //     ? 'text-yellow-500'
            //     : item.status === 'Refunded'
            //     ? 'text-green-400'
            //     : item.status === 'Partially Refunded'
            //     ? 'text-yellow-300'
            //     : item.status.includes('Awaiting')
            //     ? 'text-orange-300'
            //     : 'text-red-500'
            // }`}
            >
              Completed
            </span>
          </div>
        </div>
        <div className="sm:w-full p-5">
          <h4 className="text-sm font-bold">Products</h4>
          <CustomerProducts orderProducts={orderProducts} />
          <div className="w-full mt-3">
            <h4 className="font-bold text-sm">Payment</h4>
            <CustomerPayment />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerTransactionDetail;
