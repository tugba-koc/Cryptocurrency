import React from "react";
import "./Container/style.css";

function Time({ serverTime, checkData }) { 
  return (
    <div className="wrapper purple d-flex flex-column ps-3 justify-content-center">
      {checkData
        ? new Date(serverTime)
            .toLocaleTimeString("en-GB", { hour12: false })
            .slice(0,10)
        : "..."}

      <div className="explain">Check Server Time</div>
    </div>
  );
}

export default Time;
