import React from "react";
import "./style.css";
import ItemResult from "../ItemResult/ItemResult";
import Spinner from "../../Spinner/Spinner";

function ContainerResults({ results, isLoading }) {
  if (!isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">PRICE</th>
            <th scope="col">QTY</th>
            <th scope="col">QUOTEQTY</th>
            <th scope="col">TIME</th>
          </tr>
        </thead>

        {results.slice(0, 8).map((result, index) => (
          <ItemResult result={result} key={index} />
        ))}
      </table>
    </div>
  );
}

export default ContainerResults;
