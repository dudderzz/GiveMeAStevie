const App = () => {
  let stevieQuotes = [
    "'I didn’t want to piss on his battery'",
    "'Really going to get into the beef and gravy of it today'",
    "A' lie can travel halfway around the world while the truth is putting on its shoes'",
    "'I don’t have an example to show you, but if you go into your minds eye for a moment and imagine it'",
    "'Feels like I’ve picked up a car instead of using a hammer'",
    "'Fucking UX again Man'",
    "'It’s going'",
    "'And that means there’s no more brakes on the train,….so to speak'",
    "'Mortimer’s your uncle'",
    "'Patty’s you aunt'",
    "'Meme implied'",
    "'I like the cut of your jab'",
    "'Is all free sailing now'",
    "'It’s all free sailing today lads'",
  ];

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
        <div className="spicyButton">
          <button onClick={newQuote}>Give me something spicy 🌶</button>
        </div>
      </div>
    </div>
  );
};

export default App;
