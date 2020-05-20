const chartOptions = {
  chart: {
    type: 'line',
  },
  xAxis: {
    categories: [
      // '2020-05-06',
      // '2020-05-07',
      // '2020-05-08',
      // '2020-05-11',
      // '2020-05-12',
      // '2020-05-13',
      // '2020-05-14',
      // '2020-05-15',
      // '2020-05-18',
      // '2020-05-19',
      // '2020-05-20',
    ],
  },
  yAxis: {
    title: {
      text: 'COUNT',
    },
  },
  dataLabels: {
    enabled: true,
    rotation: -90,
    color: '#FFFFFF',
    align: 'right',
    format: '{point.y:.1f}', // one decimal
    y: 10, // 10 pixels down from the top
    style: {
      fontSize: '13px',
      fontFamily: 'Verdana, sans-serif',
    },
  },
  title: {
    style: {
      fontSize: '0px',
    },
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      },
    },
    series: {
      label: {
        enabled: false,
        marker: {
          symbol: 'circle',
          radius: 12,
        },
      },
    },
  },
  colors: [
    '#269488',
    '#31c4b4',
    '#2c7781',
    '#3EACBA',
    '#1d83d1',
    '#f4db0b',
    '#0ab3eb',
    '#f4270b',
    '#f4270b',
    '#f4270b',
  ],
  legend: {
    enabled: true,
    backgroundColor: '#FFFFFF',
    layout: 'horizontal',
    align: 'right',
    floating: true,
    verticalAlign: 'top',
    y: -15.0,
    x: -20.0,
  },
  tooltip: {
    crosshairs: true,
    shared: true,
  },
  credits: {
    enabled: false,
  },
  series: [
    // { name: 'plannedStops',
    //   data: [595.0, 523.0, 429.0, 397.0, 623.0, 705.0, 604.0, 551.0, 459.0, 818.0, 700.0]
    // },
    // {
    //   name: 'actualStops'
    //   data: [556.0, 490.0, 407.0, 377.0, 583.0, 649.0, 554.0, 474.0, 408.0, 769.0, 359.0]
    // },
    // {
    //   name: 'plannedShipments',
    //   data: [1294.0, 1174.0, 914.0, 878.0, 1242.0, 1336.0,
    //    1273.0, 1135.0, 984.0, 1887.0, 1706.0]
    // },
    // {
    //   name: 'actualShipments',
    //   data: [1220.0, 1127.0, 854.0, 834.0, 1174.0, 1192.0, 1192.0, 990.0, 852.0, 1318.0, 1532.0]
    // },
  ],
};

export default chartOptions;
