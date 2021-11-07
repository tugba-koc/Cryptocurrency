import React from "react";
import "../style.css";

function ChangePercent({ changePercent, checkData }) {
  return (
    <div className="wrapper orange d-flex flex-column ps-3 justify-content-center">
      {checkData ? "%"+Number(changePercent).toFixed(2).toString().replace(".",",") : "..."}

      <div className="explain">Price Change Percent</div>
    </div>
  );
}

export default ChangePercent;
