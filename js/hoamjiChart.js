Apex.dataLabels = {
  enabled: false
}

var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0', '#67748e', '#e4a9d2']

var optionsArea = {
  chart: {
    height: 400,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: 'straight',
    width: 3,
  },
  colors: colorPalette,
  series: [
    {
      name: '매우맑음',
      type: 'line',
      data: [0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 1.09 , 2.19 , 3.28 , 4.37 , 5.00 , 11.46 , 17.92 , 24.37 , 30.83 , 39.00 , 47.17 , 55.33 , 63.50 , 70.30 , 77.10 , 83.90 , 90.70 , 95.43 , 100.16 , 104.88 , 109.61 , 112.55 , 115.49 , 118.43 , 121.37 , 120.12 , 118.87 , 117.62 , 116.38 , 112.08 , 107.79 , 103.50 , 99.21 , 93.52 , 87.84 , 82.15 , 76.46 , 69.28 , 62.10 , 54.92 , 47.74 , 40.44 , 33.15 , 25.85 , 18.56 , 13.20 , 9.49 , 3.71 , 1.18 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 ]
    },
    {
      name: '맑음',
      type: 'line',
      data: [0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 1.04 , 2.08 , 3.12 , 4.16 , 4.75 , 10.89 , 17.02 , 23.16 , 29.29 , 37.05 , 44.81 , 52.57 , 60.33 , 66.79 , 73.25 , 79.71 , 86.17 , 90.66 , 95.15 , 99.64 , 104.13 , 106.92 , 109.71 , 112.51 , 115.30 , 114.11 , 112.93 , 111.74 , 110.56 , 106.48 , 102.40 , 98.32 , 94.25 , 88.85 , 83.44 , 78.04 , 72.64 , 65.82 , 59.00 , 52.17 , 45.35 , 38.42 , 31.49 , 24.56 , 17.63 , 12.54 , 9.02 , 3.53 , 1.13 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00]
    },
    {
      name: '보통',
      type: 'line',
      data: [0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.93 , 1.86 , 2.79 , 3.72 , 4.25 , 9.74 , 15.23 , 20.72 , 26.21 , 33.15 , 40.09 , 47.03 , 53.98 , 59.76 , 65.54 , 71.32 , 77.10 , 81.12 , 85.13 , 89.15 , 93.17 , 95.67 , 98.17 , 100.66 , 103.16 , 102.10 , 101.04 , 99.98 , 98.92 , 95.27 , 91.62 , 87.97 , 84.33 , 79.49 , 74.66 , 69.83 , 64.99 , 58.89 , 52.79 , 46.68 , 40.58 , 34.38 , 28.18 , 21.98 , 15.77 , 11.22 , 8.07 , 3.15 , 1.01 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00]
    },
    {
      name: '흐림',
      type: 'line',
      data: [0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.66 , 1.31 , 1.97 , 2.62 , 3.00 , 6.88 , 10.75 , 14.62 , 18.50 , 23.40 , 28.30 , 33.20 , 38.10 , 42.18 , 46.26 , 50.34 , 54.42 , 57.26 , 60.09 , 62.93 , 65.77 , 67.53 , 69.29 , 71.06 , 72.82 , 72.07 , 71.32 , 70.57 , 69.83 , 67.25 , 64.67 , 62.10 , 59.52 , 56.11 , 52.70 , 49.29 , 45.88 , 41.57 , 37.26 , 32.95 , 28.64 , 24.27 , 19.89 , 15.51 , 11.14 , 7.92 , 5.69 , 2.23 , 0.71 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00]
    },
    {
      name: '매우흐림',
      type: 'line',
      data: [0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.33 , 0.66 , 0.98 , 1.31 , 1.50 , 3.44 , 5.38 , 7.31 , 9.25 , 11.70 , 14.15 , 16.60 , 19.05 , 21.09 , 23.13 , 25.17 , 27.21 , 28.63 , 30.05 , 31.47 , 32.88 , 33.77 , 34.65 , 35.53 , 36.41 , 36.04 , 35.66 , 35.29 , 34.91 , 33.63 , 32.34 , 31.05 , 29.76 , 28.06 , 26.35 , 24.64 , 22.94 , 20.78 , 18.63 , 16.48 , 14.32 , 12.13 , 9.94 , 7.76 , 5.57 , 3.96 , 2.85 , 1.11 , 0.36 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00 , 0.00]
    }
  ],
  fill: {
    opacity: 1,
  },
  title: {
    text: '호암지 종합운동장 태양광 발전량(kWh)',
    align: 'left',
    style: {
      fontSize: '18px'
    }
  },
  noData: {
    text: 'Loading...'
  },
  markers: {
    size: 0,
    style: 'hollow',
    hover: {
      opacity: 5,
    }
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'category',
    categories: ["00:15","00:30","00:45","01:00","01:15","01:30","01:45","02:00","02:15","02:30","02:45","03:00","03:15","03:30","03:45","04:00","04:15","04:30","04:45","05:00","05:15","05:30","05:45","06:00","06:15","06:30","06:45","07:00","07:15","07:30","07:45","08:00","08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00","19:15","19:30","19:45","20:00","20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:00","22:15","22:30","22:45","23:00","23:15","23:30","23:45","24:00"],
    // tickPlacement: 'on',
    tooltip: {
      enabled: false
    },
    labels: {
      show: true,
      rotate: 270
    },
    axisTicks: {
      show: true
    }
  },
  yaxis: {
    labels: {
      offsetX: -10,
      minWidth: 10,
      style: {
        colors: '#78909c'
      }
    },
    tickAmount: 13,
    min: 0.00,
    max: 130.00,
  },
  legend: {
    show: true,
    floating: true,
    horizontalAlign: 'right',
    onItemClick: {
      toggleDataSeries: false
    },
    position: 'top',
    offsetY: -28,
    offsetX: 60
  },
}

var chartArea = new ApexCharts(document.querySelector('#area'), optionsArea);
chartArea.render();


// $.getJSON('/json/15minutesPerDay.json', function(json) {

//   // console.log(json);

//   // for(i of Object.values(json)){
//   //   // console.log(i);
//   //   var minutes = Object.values(i)[0];
//   //   console.log(minutes);
//   // }

//   chartArea.updateSeries([{
//     name: 'minutes',
//     data: json
//   }])


// });





var optionsArea = {
  chart: {
    height: 400,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: 'straight',
    width: 3,
  },
  colors: colorPalette,
  series: [
    {
      name: '일요일',
      type: 'line',
      data: [22.32, 22.32, 21.78, 21.6, 21.42, 21.6, 21.42, 21.78, 21.6, 21.6, 22.5, 22.86, 22.5, 22.5, 22.68, 22.14, 22.5, 22.68, 22.68, 26.82, 26.46, 27.36, 27.9, 24.84, 19.08, 17.82, 17.28, 16.2, 14.4, 12.78, 10.26, 5.76, 1.62, 3.42, 7.56, 3.42, 7.02, 5.04, 4.5, 13.5, 15.12, 40.86, 55.8, 56.7, 58.86, 60.48, 59.4, 58.14, 58.5, 60.3, 63.54, 63.18, 63.36, 63.54, 63.9, 60.84, 57.78, 57.6, 48.6, 50.4, 47.52, 43.2, 26.64, 14.22, 14.58, 15.3, 12.42, 11.52, 8.46, 3.96, 6.12, 13.14, 17.28, 20.34, 20.7, 25.74, 26.46, 24.66, 23.58, 22.86, 22.86, 22.86, 24.3, 25.2, 25.2, 24.84, 24.84, 24.3, 22.5, 22.14, 21.78, 21.78, 20.88, 21.06, 21.42, 21.78]
    },
    {
      name: '월요일',
      type: 'line',
      data: [22.14, 22.14, 21.96, 22.32, 22.86, 21.96, 21.42, 21.78, 21.42, 21.42, 21.42, 21.6, 21.78, 22.14, 22.14, 22.14, 22.5, 22.5, 22.5, 27, 26.28, 27.72, 28.8, 26.1, 19.26, 18, 15.84, 14.22, 12.42, 9.54, 3.06, 4.68, 9.54, 18.36, 18.54, 22.68, 21.96, 17.82, 28.62, 34.56, 39.24, 44.46, 50.58, 46.8, 37.62, 23.94, 42.12, 52.02, 46.26, 32.04, 33.48, 33.12, 49.86, 48.06, 53.46, 27.9, 29.7, 44.64, 30.42, 33.12, 22.5, 10.8, 18.9, 10.8, 5.4, 2.34, 4.14, 4.32, 8.64, 16.02, 19.44, 21.42, 21.6, 23.4, 23.94, 30.42, 28.62, 27.54, 27.18, 26.82, 26.64, 27, 28.26, 29.34, 29.88, 29.88, 28.98, 26.28, 23.76, 23.4, 22.68, 22.5, 22.32, 21.96, 22.14, 22.5]
    },
    {
      name: '화요일',
      type: 'line',
      data: [22.68, 22.32, 22.32, 22.14, 21.6, 22.32, 22.68, 23.22, 23.04, 22.68, 22.68, 21.96, 22.14, 22.32, 22.68, 22.68, 23.4, 23.94, 23.94, 27.18, 26.46, 28.08, 28.08, 23.76, 19.08, 17.1, 15.3, 13.5, 11.16, 9, 7.02, 1.62, 3.24, 8.28, 12.6, 9, 9.72, 15.48, 23.76, 21.78, 22.86, 28.8, 29.52, 35.28, 36.54, 43.02, 35.1, 37.08, 29.34, 29.52, 26.82, 26.64, 25.56, 30.96, 24.84, 23.58, 21.78, 29.34, 18.18, 12.42, 6.3, 2.16, 2.88, 1.98, 6.84, 8.64, 11.7, 12.24, 2.88, 4.5, 12.96, 18.18, 22.32, 25.2, 25.38, 32.94, 29.7, 28.62, 28.08, 27.9, 27.54, 28.8, 30.24, 30.06, 28.98, 28.62, 27.72, 26.28, 25.2, 24.48, 23.94, 23.76, 23.22, 23.22, 23.04, 23.58]
    },
    {
      name: '수요일',
      type: 'line',
      data: [24.12, 24.12, 23.76, 23.58, 23.4, 23.4, 23.58, 23.58, 23.58, 23.4, 23.58, 23.58, 23.76, 24.3, 25.2, 25.2, 24.48, 24.3, 24.12, 23.22, 23.4, 23.4, 24.12, 22.86, 19.26, 19.8, 19.44, 17.1, 13.5, 8.1, 1.98, 5.4, 11.88, 17.28, 21.06, 23.76, 25.38, 28.26, 33.12, 39.24, 45.36, 48.42, 52.38, 55.8, 56.7, 58.68, 50.22, 57.42, 42.84, 34.2, 23.94, 39.42, 62.46, 54.54, 47.34, 46.8, 48.6, 47.52, 2.34, 4.5, 23.94, 15.48, 30.96, 13.32, 9.72, 13.32, 8.82, 3.6, 2.34, 9.9, 18, 20.88, 22.68, 25.38, 26.1, 33.66, 30.96, 30.6, 29.7, 27.36, 27.9, 28.08, 29.34, 30.06, 29.34, 29.34, 28.8, 27.9, 24.84, 24.66, 24.3, 23.22, 22.5, 22.5, 23.04, 22.32]
    },
    {
      name: '목요일',
      type: 'line',
      data: [22.32, 22.14, 21.96, 22.14, 21.96, 21.96, 21.96, 23.22, 22.68, 21.96, 21.78, 21.96, 22.14, 22.32, 22.68, 22.32, 22.68, 22.68, 22.5, 25.38, 23.04, 25.02, 25.74, 24.12, 18.36, 17.46, 17.1, 14.94, 11.88, 8.28, 2.52, 7.74, 15.12, 20.7, 22.32, 23.22, 25.74, 26.46, 32.58, 39.24, 40.68, 50.04, 53.28, 56.16, 56.52, 52.2, 35.64, 38.16, 52.74, 34.74, 62.28, 41.94, 37.44, 52.74, 24.48, 21.24, 35.82, 42.84, 36.72, 14.94, 7.92, 0.9, 1.08, 5.76, 9.9, 4.68, 3.6, 5.58, 5.04, 15.48, 22.14, 25.02, 26.46, 27.54, 28.8, 32.22, 28.8, 27.54, 28.08, 27.36, 27.36, 28.08, 28.8, 29.52, 29.16, 28.98, 27.54, 26.1, 24.12, 23.76, 23.04, 22.32, 21.78, 21.78, 22.14, 22.5]
    },
    {
      name: '금요일',
      type: 'line',
      data: [22.86, 22.86, 22.5, 22.32, 22.14, 21.96, 22.32, 22.32, 22.14, 21.96, 21.96, 22.14, 22.32, 22.86, 22.5, 22.5, 22.86, 24.48, 23.22, 22.32, 22.14, 21.96, 22.86, 22.5, 16.56, 16.56, 17.46, 17.1, 17.46, 16.56, 16.2, 15.66, 14.76, 16.2, 20.16, 22.68, 24.3, 24.48, 22.14, 21.78, 20.16, 17.28, 15.12, 11.52, 10.62, 10.44, 13.32, 13.68, 14.22, 9.18, 7.74, 11.34, 3.42, 8.28, 7.38, 7.92, 12.06, 9, 2.34, 3.6, 8.82, 7.38, 12.78, 10.44, 8.1, 18.54, 5.04, 10.08, 14.22, 16.02, 12.24, 19.98, 22.32, 25.02, 24.66, 30.06, 28.08, 27.54, 26.46, 26.1, 25.74, 26.1, 27.36, 28.08, 27.18, 26.64, 25.92, 24.12, 22.86, 22.5, 21.96, 21.42, 21.24, 21.42, 21.42, 21.78]
    },
    {
      name: '토요일',
      type: 'line',
      data: [22.5, 22.5, 22.14, 21.78, 22.5, 23.04, 23.22, 22.32, 21.78, 21.6, 21.78, 21.78, 21.96, 22.68, 22.68, 22.86, 22.5, 22.68, 22.14, 21.96, 21.78, 21.96, 22.5, 22.14, 16.74, 17.28, 16.38, 14.58, 11.52, 9.72, 9.36, 6.48, 2.16, 7.74, 5.04, 8.64, 26.1, 36.54, 39.96, 41.94, 47.16, 51.3, 55.62, 55.26, 49.5, 60.84, 47.16, 35.82, 49.5, 66.24, 59.76, 61.38, 61.56, 48.06, 67.5, 46.26, 56.88, 55.26, 54.9, 50.04, 36.9, 41.4, 30.78, 31.5, 28.62, 26.28, 22.32, 15.66, 10.44, 2.88, 8.46, 15.3, 18.9, 21.24, 23.58, 26.82, 24.48, 23.76, 23.04, 24.48, 24.66, 24.48, 25.02, 24.66, 24.66, 24.48, 24.12, 23.58, 22.32, 21.96, 21.6, 21.24, 21.06, 20.88, 21.06, 21.6]
    }
  ],
  fill: {
    opacity: 1,
  },
  title: {
    text: '호암지 종합운동장(요일별 전력수요)(kWh)',
    align: 'left',
    style: {
      fontSize: '18px'
    }
  },
  noData: {
    text: 'Loading...'
  },
  markers: {
    size: 0,
    style: 'hollow',
    hover: {
      opacity: 5,
    }
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'category',
    categories: ["00:15","00:30","00:45","01:00","01:15","01:30","01:45","02:00","02:15","02:30","02:45","03:00","03:15","03:30","03:45","04:00","04:15","04:30","04:45","05:00","05:15","05:30","05:45","06:00","06:15","06:30","06:45","07:00","07:15","07:30","07:45","08:00","08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00","19:15","19:30","19:45","20:00","20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:00","22:15","22:30","22:45","23:00","23:15","23:30","23:45","24:00"],
    // tickPlacement: 'on',
    tooltip: {
      enabled: false
    },
    labels: {
      show: true,
      rotate: 270
    },
    axisTicks: {
      show: true
    }
  },
  yaxis: {
    labels: {
      offsetX: -10,
      minWidth: 10,
      style: {
        colors: '#78909c'
      }
    },
    tickAmount: 8,
    min: 0.00,
    max: 80.00,
  },
  legend: {
    show: true,
    floating: true,
    horizontalAlign: 'right',
    onItemClick: {
      toggleDataSeries: false
    },
    position: 'top',
    offsetY: -28,
    offsetX: 60
  },
}

var chartArea = new ApexCharts(document.querySelector('#areaweek'), optionsArea);
chartArea.render();


