import React from "react";
import "./style.css";

function GetWeek() {
  var getDaysArray = function (start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      if (new Date(dt).getDay() === 1) {
        arr.push(new Date(dt).toString().slice(4, 10));
      }
    }
    return arr;
  };

  let daylist = getDaysArray(new Date("2021-02-22"), new Date("2021-05-31"));
  daylist.splice(0, 1);
  return (
    <div className="d-flex flex-row justify-content-evenly weeks pt-2">
      {daylist.map((day, index) => (
        <div key={index}>{day}</div>
      ))}
    </div>
  );
}

export default GetWeek;
