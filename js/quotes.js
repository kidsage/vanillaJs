const quotes = [
  { quote: "A", author: "Ian" },
  { quote: "b", author: "Ian" },
  { quote: "c", author: "Ian" },
  { quote: "d", author: "Ian" },
  { quote: "e", author: "Ian" },
  { quote: "f", author: "Ian" },
  { quote: "g", author: "Ian" },
  { quote: "h", author: "Ian" },
  { quote: "i", author: "Ian" },
  { quote: "j", author: "Ian" },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
