import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  LegendType,
  Legend,
  CartesianGrid,
  Bar,
  ComposedChart,
} from "recharts";
// import { Tooltip } from 'recharts/types/component/Tooltip'

import styles from "../styles/Home.module.css";

export default function Home() {
  const data = [
    { name: "2014", uv: 1500, pv: 2400, amt: 2400 },
    { name: "2015", uv: 1600, pv: 1600, amt: 2200 },
    { name: "2016", uv: 1300, pv: 1700, amt: 2400 },
    { name: "2017", uv: 1550, pv: 2000, amt: 2500 },
    { name: "2018", uv: 1600, pv: 2100, amt: 2900 },
    { name: "2019", uv: 1700, pv: 2600, amt: 2600 },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ComposedChart width={600} height={400} data={data}>
          <Line type="linear" dataKey="pv" stroke="#8884d8" />,
          <Bar dataKey="uv" barSize={20} fill="#17F0C5" />
          <Tooltip />,
          <XAxis dataKey="name" />,
          <YAxis />,
          <Legend type="line" iconType="circle" />
          <CartesianGrid type="horizontal" />
        </ComposedChart>
      </main>
    </div>
  );
}
