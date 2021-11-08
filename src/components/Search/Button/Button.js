import React from "react";
import styles from "./style.module.css";

function Button({ showFilteredList }) {
  return (
    <div className="w-100">
      <button
        type="button"
        onClick={showFilteredList}
        className={`btn btn-primary ${styles.button} ms-3 w-100 text-start ps-5`}
      >
        Filter
      </button>
    </div>
  );
}

export default Button;
