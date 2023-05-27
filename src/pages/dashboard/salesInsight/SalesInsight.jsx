import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SalesInsight = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    tooltip: {
      className: 'border-0 rounded bg-white text-slate-600',
      borderWidth: 1,
      shadow: false,
      borderColor: '#64748b',
      backgroundColor: '#fff',
    },
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: '',
      },
      categories: [
        'Jan 1',
        'Jan 2',
        'Jan 3',
        'Jan 4',
        'Jan 5',
        'Jan 6',
        'Jan 7',
      ],
      //   categories: ['1000', '1500', '2000', '2500', '3000', '3500', '4000'],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        name: 'Direct',
        data: [800, 1020, 990, 2180, 3700, 3500, 3900],
      },
      {
        name: 'Social Media',
        data: [1000, 2500, 3050, 1500, 1700, 2200, 1800],
      },
    ],
  };
  return (
    <div id="container" className="w-full mt-8 h-[400px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SalesInsight;
