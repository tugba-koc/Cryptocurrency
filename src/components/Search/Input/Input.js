import React from "react";
import "./style.css";

function Input({ text, setText }) {
  return (
    <div className="w-100">
      <input
        className="input w-100 me-5 ps-4 pe-2"
        type="search"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Input;
