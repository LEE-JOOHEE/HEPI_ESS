// ApexChart -> real-time line chart
window.Apex = {
    chart: {
      foreColor: '#fff',
      toolbar: {
        show: false
      },
    },
    colors: ['#FCCF31', '#17ead9', '#f02fc2'],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: "#40475D",
    },
    xaxis: {
      axisTicks: {
        color: '#333'   //x축 값라인 컬러
      },
      axisBorder: {
       color: "#333"    //x축 라인 컬러
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: ['#F55555', '#6078ea', '#6094ea']
      },
    },
    tooltip: {
      enabled: false,
      theme: 'dark',
      x: {
        formatter: function () {
          return moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        }
      }
    },
    yaxis: {
      decimalsInFloat: 4,   //소수점
      // opposite: true,
      labels: {
        offsetX: -20,
        minWidth: 40
      },
      min: 3.6,
      max: 4.1
    }
  };
  
  var trigoStrength = 3;
  var iteration = 1;
  
  function getRandom() {
    // var i = iteration;
    var result = Math.random()* (3.83 - 3.70) + 3.70;
    // return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
    return result;
  }
  
  function generateMinuteWiseTimeSeries(baseval, count) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      // var y = (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2);
      var y = Math.random()* (3.83 - 3.70) + 3.70;
  
      series.push([x, y]);
      baseval += 1000;
      i++;
    }
    return series;
  }
  
  function generateMinuteWiseTimeSeriesOther(baseval, count) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      // var y = (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2);
      var y = (Math.random()* (3.83 - 3.70) + 3.70)-3.7;
  
      series.push([x, y]);
      baseval += 1000;
      i++;
    }
    return series;
  }
  
  var optionsLine = {
    chart: {
      height: 350,
      type: 'line',
      stacked: true,
      animations: {
        enabled: false,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22
      },
      events: {
        animationEnd: function (chartCtx, opts) {
          const newData1 = chartCtx.w.config.series[0].data.slice()
          newData1.shift();
          const newData2 = chartCtx.w.config.series[1].data.slice()
          newData2.shift();
          const newData3 = chartCtx.w.config.series[2].data.slice()
          newData3.shift();
  
          // check animation end event for just 1 series to avoid multiple updates
          if (opts.el.node.getAttribute('index') === '0') {
            window.setTimeout(function () {
              chartCtx.updateOptions({
                series: [{
                  data: newData1
                }, {
                  data: newData2
                }, {
                  data: newData3
                }],
                // subtitle: {
                //   text: parseInt(getRandom() * Math.random()).toString(),
                // }
              }, false, false)
            }, 300);
          }
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3,
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    series: [{
      name: 'min_vol',
      data: generateMinuteWiseTimeSeries(new Date().getTime(), 12, {
        // min: 10,
        // max: 110
      })
    }, {
      name: 'avg_vol',
      data: generateMinuteWiseTimeSeriesOther(new Date().getTime(), 12, {
        // min: 10,
        // max: 110
      })
    }, {
      name: 'max_vol',
      data: generateMinuteWiseTimeSeriesOther(new Date().getTime(), 12, {
        // min: 10,
        // max: 110
      })
    }],
    xaxis: {
      type: 'datetime',
      range: 9000
    },
    title: {
      text: 'CellVol',
      align: 'left',
      style: {
        fontSize: '12px'
      }
    },
    // subtitle: {
    //   text: '20',
    //   floating: true,
    //   align: 'right',
    //   offsetY: 0,
    //   style: {
    //     fontSize: '22px'
    //   }
    // },
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
  
  var chartLine = new ApexCharts(
    document.querySelector("#linechart"),
    optionsLine
  );
  chartLine.render()
  
  window.setInterval(function () {
    
    iteration++;
    chartLine.updateSeries([{
      data: [...chartLine.w.config.series[0].data,
        [
          chartLine.w.globals.maxX + 1000
          ,
          getRandom()
        ]
      ]
    }, {
      data: [...chartLine.w.config.series[1].data,
        [
          chartLine.w.globals.maxX + 1000,
          getRandom()-3.7
        ]
      ]
    }, {
      data: [...chartLine.w.config.series[2].data,
        [
          chartLine.w.globals.maxX + 1000,
          getRandom()-3.7
        ]
      ]
    }])
  }, 1000);