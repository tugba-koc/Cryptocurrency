import React from "react";
import "../style.css";

function Price({ averagePrice, checkData }) {
  return (
    <div className="wrapper blue d-flex flex-column ps-3 justify-content-center">
        {checkData ? averagePrice.toString().replace(".",",") : "..."}
 
      <div className="explain">Current Average Price</div>
    </div>
  );
}

export default Price;
