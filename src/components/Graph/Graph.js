import React from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import GetWeek from "./GetWeek";

function Graph() {
  const [totalValue, setTotalValue] = React.useState([]);
 
  const fetchData = async () => { 

    // constant to hold the data 
    const basePoint = "https://api.binance.com/";

    // constant to hold the data
    const symbol = `?symbol=BNBBTC&limit=98&interval=1d&startTime=1614027599000&endTime=1622505599000`;

    // get the url to fetch the data, historical data
    const historicalPriceAPI = basePoint + "api/v3/klines" + symbol;

    // response from the api
    const response = await axios.get(historicalPriceAPI);

    // historical data
    setTotalValue(response.data);
  };

  // useEffect to fetch the data
  React.useEffect(() => {
    fetchData();
  }, []);

  // an array for the data of the graph
  const data = [];

  // loop for the data of XAxis and YAxis
  if (totalValue.length > 0) {
    for (let i = 0; i < 98; i += 5) {
      data.push({
        name: "",
        value: totalValue[i][4],
      });
    }
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          data={data}
          backgroundColor="white"
          margin={{
            top: 100,
            right: 30,
            left: 30,
            bottom: -10,
          }}
        >
          <defs>
            <linearGradient id="colorvalue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8884d8" stopOpacity={0.4} />
              <stop offset="25%" stopColor="#8884d8" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity={0.5} strokeDasharray="2" />
          <XAxis
            axisLine={{ stroke: "#B3C8EA" }}
            tickLine={false}
            dataKey="name"
          ></XAxis>
          <YAxis
            tick={{ fill: "#C4C4C4" }}
            axisLine={{ stroke: "#B3C8EA" }}
            tickLine={false}
            tickSize={10}
          />
          <Tooltip />
          />
          <YAxis tickSize={10} tickLine={false}  />
          <Area
          strokeWidth ="3"
            dot={{ stroke: "#8884d8", strokeWidth: 2, fill: "white" }}
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 5 }}
            fillOpacity={0.8}
            fill="url(#colorvalue)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <GetWeek />
    </div>
  );
}

export default Graph;
