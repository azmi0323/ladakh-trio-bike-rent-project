import React, { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import "./Dashboard.css";
const Dashboard = () => {
  const [cart, setChart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  return (
    <div className="container chart-list mt-5">
      <div>
        <LineChart width={600} height={400} data={cart}>
          <Line dataKey={"investment"}></Line>
          <Line dataKey={"revenue"}></Line>
          <Line dataKey={"sell"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
        <h2 className="mt-3 fw-bold">
          <span className="orange">Our Sells</span> in Last Six Month
        </h2>
      </div>
      <div>
      
        <PieChart width={400} height={400}>
          <Pie data={cart} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={cart} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </div>
      <div>
      <AreaChart
          width={600}
          height={400}
          data={cart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </div>
      <div>
      <BarChart
          width={600}
          height={400}
          data={cart}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          <Bar dataKey="sell" fill="#ffc658" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
