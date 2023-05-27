import { Card, DataCard } from '../../components/card/Card';
import { insight } from './data';
import HotSelling from './hotSelling/HotSelling';
import NewCustomers from './newCustomers/NewCustomers';
import OrdersInsight from './ordersInsight/OrdersInsight';
import RecentOrders from './recentOrders/RecentOrders';
import SalesInsight from './salesInsight/SalesInsight';

const Dashboard = () => {
  return (
    <div className="p-5 bg-slate-100">
      <h4 className="text-2xl">
        Welcome, <span className="font-bold text-4xl">Olushola</span>
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
          <div className="flex gap-4 justify-between w-full flex-col lg:flex-row">
            <DataCard
              customStyle={'lg:w-[60%] sm:w-[100%]'}
              title="Sales Insight"
            >
              <SalesInsight />
            </DataCard>
            <DataCard
              customStyle="sm:w-[100%] lg:w-[40%]"
              title="Orders Insight"
            >
              <OrdersInsight />
            </DataCard>
          </div>
        </section>
        <section className="mt-6">
          <DataCard customStyle="w-[100%]" title="Recent Orders">
            <RecentOrders />
          </DataCard>
        </section>
        <section className="mt-6">
          <div className="flex gap-4 justify-between w-full flex-col lg:flex-row">
            <DataCard
              customStyle={'lg:w-[40%] sm:w-[100%] self-start'}
              title="New Customers"
            >
              <NewCustomers />
            </DataCard>
            <DataCard
              customStyle="sm:w-[100%] lg:w-[60%] self-start"
              title="Hot Selling"
            >
              <HotSelling />
            </DataCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
