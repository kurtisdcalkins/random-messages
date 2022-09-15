const d = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const message = {
  date: weekday[d.getUTCDay()],
  statement: ["Your silly quote for ", " is: "],
  quotes: [
    {
      quote:
        "I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.",
      author: "Mitch Hedberg",
    },
    {
      quote:
        "A pessimist is a person who has had to listen to too many optimists.",
      author: "Don Marquis",
    },
    {
      quote:
        "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
      author: "Abraham Lincoln",
    },
    {
      quote: "If I were two-faced, would I be wearing this one?",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "The best thing about the future is that it comes one day at a time.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "An alcoholic is someone you don’t like who drinks as much as you do.",
      author: "Alan Dundes",
    },
    {
      quote:
        "The difference between stupidity and genius is that genius has its limits.",
      author: "Albert Einstein",
    },
    {
      quote:
        "I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.",
      author: "Arthur C. Clarke",
    },
    {
      quote:
        "A bank is a place that will lend you money if you can prove that you don’t need it.",
      author: "Bob Hope",
    },
    {
      quote:
        "People who think they know everything are a great annoyance to those of us who do.",
      author: "Isaac Asimov",
    },
  ],
};

const num = Math.floor(Math.random() * message.quotes.length);

const selectedQuote = message.quotes[num];

const newMessage = `${message.statement[0]}${message.date}${message.statement[1]}\n${selectedQuote.quote} -${selectedQuote.author}`;

console.log(newMessage);
