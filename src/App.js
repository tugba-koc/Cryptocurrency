import "./App.css";
import React, { useState, useEffect } from "react";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import Graph from "./components/Graph/Graph";
import InputButton from "./components/Search/Search";
import ContainerResults from "./components/Results/Container/ContainerResults";
import axios from "axios";


function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // background color changed to light pink
  document.body.style = "background: #f4f6fc;";

  // fetching data from the API
  const fetchData = async () => {
    const response = await axios.get(
      "https://api.binance.com/api/v3/trades?symbol=LTCBTC"
    );
    setResults(response.data.reverse());
    setIsLoading(true);
  };
  
  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <DashboardContainer />
      <Graph />
      <InputButton />
      <ContainerResults results={results} isLoading={isLoading} />
    </div>
  );
}

export default App;
