import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 100,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 500,
    pv: 800,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 200,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 300,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 800,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 100,
    pv: 4300,
    amt: 2100,
  },
];

export default class Charts extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={100}
          height={50}
          data={data}
          margin={{
            top: 30,
            right: 10,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="linear-gradient(180deg, rgba(235, 111, 83, 0.2) 0%, rgba(235, 111, 83, 0) 100%);" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
