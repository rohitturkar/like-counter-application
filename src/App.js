import "./styles.css";
import React, { useState } from "react";
// var counter = 0;

export default function App() {
  const [likeCounter, updateLikeCounter] = useState(0);
  function onClickHandler() {
    var newLikeCounter = likeCounter + 1;
    updateLikeCounter(newLikeCounter);
  }
  return (
    <div className="App">
      <h1 style={{ color: "orange" }}> hello this is Like Counter app</h1>

      <button onClick={onClickHandler} className="btn">
        like me<span>🧡</span>{" "}
      </button>
      <h3>like will show here 👇</h3>
      <div className="output">{likeCounter}</div>
    </div>
  );
}
