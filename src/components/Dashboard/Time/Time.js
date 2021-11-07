import React from "react";
import "../style.css";

function Time({ serverTime, checkData }) {
  return (
    <div className="wrapper purple d-flex flex-column ps-3 justify-content-center">
      {checkData
        ? new Date(serverTime)
            .toLocaleTimeString("en-US", { hour12: false })
            .slice(0, 8)
        : "..."}

      <div className="explain">Check Server Time</div>
    </div>
  );
}

export default Time;
