import React from "react";
import "./style.css";

function Button({ showFilteredList }) { 
  return (
    <div className="w-100 ms-3">
      <button
        type="button"
        onClick={showFilteredList}
        className= "btn btn-primary button w-100 text-start ps-4"
      >
        Filter
      </button>
    </div>
  );
}

export default Button;
