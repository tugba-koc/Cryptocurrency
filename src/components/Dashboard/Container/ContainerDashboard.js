import React from "react";
import ChangePercent from "../ChangePercent"; 
import Price from "../Price";
import Time from "../Time";
import "./style.css";
import axios from "axios";

function ContainerDashboard() {
  const [averagePrice, setAveragePrice] = React.useState([]); 
  const [changePercent, setChangePercent] = React.useState([]);
  const [serverTime, setServerTime] = React.useState([]);
  const [checkData, setCheckData] = React.useState(false);

  const fetchesData = async () => {
    // constant to store the data
    const basePoint = "https://api.binance.com/";
    const symbol = "?symbol=BNBBTC";

    // const url = basePoint + "api/v3/..." + symbol;
    const averagePriceAPI = basePoint + "api/v3/avgPrice" + symbol;
    const changePercentAPI = basePoint + "api/v1/ticker/24hr" + symbol;
    const serverTimeAPI = basePoint + "api/v3/time";

    // const response = await axios.get(url);
    const getAveragePrice = await axios.get(averagePriceAPI);
    const getChangePercent = await axios.get(changePercentAPI);
    const getServerTime = await axios.get(serverTimeAPI);

    // set the data
    axios.all([getAveragePrice, getChangePercent, getServerTime]).then(
      axios.spread((...responses) => {
        setAveragePrice(responses[0].data.price);
        setChangePercent(responses[1].data.priceChangePercent);
        setServerTime(responses[2].data.serverTime);
      })
    );
    setCheckData(true);
  };

  // useEffect to fetch data
  React.useEffect(() => {
    setInterval(() => {
      fetchesData(); 
    }, 1000);
  }, []);

  return (
    <div className="mb-4">
      <div className="dashboardLine mb-3 ">Dashboard</div>
      <div className="d-flex flex-row justify-content-evenly mx-auto w-75">
        <div className="col-4 mx-2">
          <Price averagePrice={averagePrice} checkData={checkData} />
        </div>
        <div className="col-4 mx-2">
          <ChangePercent changePercent={changePercent} checkData={checkData} />
        </div>
        <div className="col-4 mx-2">
          <Time serverTime={serverTime} checkData={checkData} />
        </div>
      </div>
    </div>
  );
}

export default ContainerDashboard;
