import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./style.css";

function ContainerSearch({ results, setFilteredList, setIsClicked }) { 

  // text input value
  const [text, setText] = React.useState(""); 

  // click on button, set filteredList acc to text, isClicked changed to true
  const showFilteredList = () => {
    setFilteredList(
      results.filter((item) => {
        return String(item.id).includes(text.toString().toLowerCase());
      })
    );
    setIsClicked(true);
  };

  return (
    <div className="d-flex justify-content-between mb-4 mt-4">
      <div className="inputLine col-5 col-md-6">Recent Trades List</div>
      <div className="d-flex flex-row col-7 offset-md-1 col-md-5">
        <Input text={text} setText={setText} />
        <Button showFilteredList={showFilteredList} />
      </div>
    </div>
  );
}

export default ContainerSearch;
