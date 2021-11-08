import React from "react";
import styles from "./style.module.css";

function Input({text, setText}) {

  return (
    <div className="w-100">
      <input
        className={`${styles.input} w-100 ps-5 pe-3`}
        type="search"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Input;
