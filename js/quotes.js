const quotes = [
  {
    quote:
      "It is during our darkest moments that we must focus to see the light",
    author: "Aristotle",
  },
  {
    quote:
      "Do not go gentle into that good night, Old age should burn and rave at close of day, Rage, rage against the dying of the light",
    author: "Dilan Thomas",
  },
  {
    quote:
      "Stay weird, stay different, and then when it's your turn, please pass the same message to the next person who comes along.",
    author: "Graham Moore",
  },
  {
    quote: "We will find a way, we always have",
    author: "Interstellar",
  },
  {
    quote: "Make it count",
    author: "Titanic",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
