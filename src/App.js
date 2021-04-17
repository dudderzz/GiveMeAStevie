import React from "react";

import { quotes } from "./stevie";

function App() {
  const [quote, setQuote] = React.useState("");

  const newQuote = () => {
    const random = [Math.floor(Math.random() * quotes.length)];
    const newQuote = `“${quotes[random]}”`;
    setQuote(newQuote);
  };

  return (
    <>
      <h1>
        <span className={quote && "flame"} aria-label="hot pepper" role="img">
          🌶
        </span>
      </h1>
      <div>
        <h2>What would Stevie Say?</h2>

        {quote && (
          <blockquote>
            <h3>{quote}</h3>
            <cite>&mdash;McCann, S (2021)</cite>
          </blockquote>
        )}

        <button onClick={newQuote}>
          Give me something spicy{" "}
          <span aria-label="hot pepper" role="img">
            🌶
          </span>
        </button>
      </div>
    </>
  );
}

export default App;
