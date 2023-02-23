import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class SplineAreaChart extends Component {
  state = {
    chartOptions: {
      chart: {
        type: "area",
        // stacked: true,
        height: 350,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          // "2018-09-19T06:30:00.000Z",
        ],
      },
      grid: {
        column: {
          show: true
        }
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val / 1000000 + "M";
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          colorStops: [
            {
              offset: 0,
              color: "#EB6F53",
              opacity: 0.7,
            },
            {
              offset: 90,
              color: "#EB6F53",
              opacity: 0.2,
            },
          ],
        },
      },
    },
    chartSeries: [
      {
        name: "Series A",
        data: [10, 41, 35, 51, 49, 62, 69],
      },
    ],
  };

  render() {
    return (
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartSeries}
          type="area"
          height={220}
        />
    );
  }
}

export default SplineAreaChart;
