import React from "react";
import axios from "axios";

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

function Graph() {
  const [state, setstate] = React.useState([]);

  const fetchData = async () => {
    const basePoint = "https://api.binance.com/";
    const endTime = Math.floor(new Date() / 1000)
      .toString()
      .slice(0, 14);
    const symbol = `?symbol=ETHBTC&limit=31&interval=1d&startTime=1633688921000&endTime=${endTime}000`;

    const averagePriceAPI = basePoint + "api/v3/klines" + symbol;

    const response = await axios.get(averagePriceAPI);
    setstate(response.data);
    console.log(response.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const data = [];

  for (let i = 0; i < 31; i++) {
    data.push({
      name: "Mar" + i,
      pv: state[i][4],
    });
  }

  return (
    <LineChart
      width={1000}
      height={400}
      data={data}
      backgroundColor="white"
      margin={{
        top: 30,
        bottom: 30,
      }}
      padding={{
        top: 100,
        bottom: 20,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />

      <Line dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default Graph;
