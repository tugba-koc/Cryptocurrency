import React from "react";
import "./style.css";

function ItemResult({ result }) {
  return (
    <tbody className="section-item">
      <tr>
        <td className="py-4 ps-5 itemId">#{result.id} </td>
        <td className="py-4">{result.price} $</td>
        <td className="py-4">{result.qty}</td>
        <td className="py-4">{result.quoteQty}</td>
        <td className="py-4">
          {new Date(result.time)
            .toLocaleDateString()
            .substr(0, 10)
            .split("/")
            .reverse()
            .join("-") +
            " " +
            new Date(result.time)
              .toLocaleTimeString("en-GB", { hour12: false })
              .substr(0, 10)}
        </td>
      </tr>
    </tbody>
  );
}

export default ItemResult;
