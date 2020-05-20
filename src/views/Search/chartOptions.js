const chartOptions = {
  chart: {
    defaultSeriesType: 'line',
  },
  title: {
    style: {
      fontSize: '0px',
    },
  },
  credits: {
    style: {
      fontSize: '0px',
    },
  },
  yAxis: {
    title: {
      text: 'COUNT',
    },
  },
  series: [],
  xAxis: {
    categories: [],
  },
  tooltip: {
    crosshairs: true,
    shared: true,
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
};

export default chartOptions;
