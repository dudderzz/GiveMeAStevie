import React from "react";
import "./App.css";
import { stevieQuotes } from "./stevie.js";

const App = () => {
  function newQuote() {
    var randomNumber = Math.floor(Math.random() * stevieQuotes.length);
    document.getElementById("quoteDisplay").innerHTML =
      stevieQuotes[randomNumber];
  }

  return (
    <div className="App">
      <div className="quoteBox">
        <div className="quote">
          <h1>🌶</h1>
          <h2 id="quoteDisplay">What would Stevie Say?</h2>
          <b>McCann, S (2021)</b>
        </div>
        <div className="button">
          <button onClick={newQuote}>Give me something spicy 🌶</button>
        </div>
      </div>
    </div>
  );
};

export default App;
