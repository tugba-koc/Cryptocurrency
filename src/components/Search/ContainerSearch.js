import React from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "./style.module.css";

function ContainerSearch({results, setFilteredList}) {
  const [text, setText] = React.useState("");

  const showFilteredList =()=>{
    setFilteredList(results.filter(item=>{
      return String(item.id).includes(text.toString().toLowerCase())
    }))
  }

  return (
    <div className="d-flex justify-content-between mb-4">
      <div className={`${styles.inputLine} col-5 col-md-6`}>
        Recent Trades List
      </div>
      <div className="d-flex flex-row col-7 offset-md-1 col-md-5">
        <Input text={text} setText={setText} />
        <Button showFilteredList={showFilteredList} />
      </div>
    </div>
  );
}

export default ContainerSearch;
