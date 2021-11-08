import React, { useState, useEffect } from "react";
import DashboardContainer from "../components/Dashboard/Container/DashboardContainer";
import Graph from "../components/Graph/Graph";
import ContainerResults from "../components/Results/Container/ContainerResults";
import axios from "axios";
import ContainerSearch from "../components/Search/ContainerSearch";


function App() {
  const [results, setResults] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // background color changed to light pink
  document.body.style = "background: #f4f6fc;";

  // fetching data from the API
  const fetchData = async () => {
    const response = await axios.get(
      "https://api.binance.com/api/v3/trades?symbol=ETHBTC"
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
      <ContainerSearch setFilteredList={setFilteredList} results={results}/>
      <ContainerResults filteredList={filteredList} results={results} isLoading={isLoading} />
    </div>
  );
}

export default App;
