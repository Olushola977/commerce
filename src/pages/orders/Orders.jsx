import { Bars3Icon, WindowIcon } from '@heroicons/react/24/solid';
import { Card, DataCard } from '../../components/card/Card';
import { insight } from './data';
import OrderList from './orderList/OrderList';

const Orders = () => {
  return (
    <div className="p-5 bg-slate-100">
      <h4 className="text-2xl">
        <span className="font-bold text-4xl">Orders</span>
      </h4>
      <div className="w-full mt-10">
        <section>
          <div className="flex gap-4 justify-between w-full flex-col md:flex-row">
            {insight &&
              insight.map((item, index) => (
                <Card key={index}>
                  <h5 className="font-semibold text-sm text-slate-400">
                    {item.name}
                  </h5>
                  <h2 className="font-semibold text-2xl mt-1 text-slate-500">
                    {item.number}
                  </h2>
                </Card>
              ))}
          </div>
        </section>
        <section className="mt-6">
          <div className="flex gap-4 w-full justify-end items-center my-3">
            <div className="bg-white bordered px-2 py-1 cursor-pointer">
              <Bars3Icon className="w-6 h-6" />
            </div>
            <div className="bg-white bordered px-2 py-1 cursor-pointer">
              <WindowIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="flex gap-4 justify-between w-full flex-col lg:flex-row">
            <OrderList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Orders;
