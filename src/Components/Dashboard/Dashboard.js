import React, { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import "./Dashboard.css";
const Dashboard = () => {
  const [cart, setChart] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setChart(data))
    },[])
  return(
        <div className="container mt-5">
            <div>
            <LineChart width={700} height={400} data={cart}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
            <h2 className="mt-3 fw-bold"><span className="orange">Our Sells</span> in Last Six Month</h2>
            </div>
        </div>
        );
};

export default Dashboard;
