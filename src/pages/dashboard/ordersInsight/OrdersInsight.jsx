import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const OrdersInsight = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    tooltip: {
      borderWidth: 1,
      shadow: false,
      borderColor: '#64748b',
      backgroundColor: '#fff',
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    title: {
      text: '',
    },
    series: [
      {
        data: [
          {
            name: 'Orders Completed',
            y: 60,
          },
          {
            name: 'Orders Pending',
            y: 25,
          },
          {
            name: 'Orders Cancelled',
            y: 10,
          },
          {
            name: 'Orders Returned',
            y: 5,
          },
        ],
      },
    ],
  };
  return (
    <div
      id="container"
      style={{ width: '100%', height: '400px', marginTop: '20px' }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OrdersInsight;
