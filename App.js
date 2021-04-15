let stevieQuotes = [
  "'I didn’t want to piss on his battery'",
  "'Really going to get into the beef and gravy of it today'",
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
  "'I like to live bi-curiously through you'",
  "'Go forth and develop'",
  "'I'm just throwing shit at the wall to see what sticks'",
  "'Feel free to piss on my chips… but…'",
  "'The question is…Do you want a new wheel or a pre-owned wheel with lots of bolt ons'",
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * stevieQuotes.length);
  document.getElementById("quoteDisplay").innerHTML =
    stevieQuotes[randomNumber];
}
