import React, { useState, useEffect } from "react";
import ContainerDashboard from "../components/Dashboard/Container/ContainerDashboard";
import Graph from "../components/Graph/Graph";
import ContainerResults from "../components/Results/Container/ContainerResults";
import axios from "axios";
import ContainerSearch from "../components/Search/Container/ContainerSearch";

function App() {
  const [results, setResults] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  // background color changed to light pink
  document.body.style = "background: #f4f6fc";

  // fetching data from the API
  const fetchData = async () => {
    const response = await axios.get(
      "https://api.binance.com/api/v3/trades?symbol=BNBBTC"
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
      <ContainerDashboard />
      <Graph />
      <ContainerSearch
        setIsFiltered={setIsFiltered}
        setFilteredList={setFilteredList}
        results={results}
      />
      <ContainerResults
        isFiltered={isFiltered}
        filteredList={filteredList}
        results={results}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
