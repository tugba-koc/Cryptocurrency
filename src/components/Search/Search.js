import React from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "./style.module.css";

function Search() {
  return (
    <div className="d-flex justify-content-between mb-4">
      <div className={`${styles.inputLine} col-5 col-md-6`}>Recent Trades List</div>
      <div className="d-flex flex-row col-7 offset-md-1 col-md-5">
          <Input/>
          <Button />
      </div>
    </div>
  );
}

export default Search;
