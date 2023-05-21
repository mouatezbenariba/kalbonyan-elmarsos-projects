const Hangman = function (word, remainingGuesses) {
  this.word = word;
  this.remainingGuesses = remainingGuesses;
};

const exampleOne = new Hangman('algeria', 3);
const exampleTwo = new Hangman('constantine', 5);

console.log(exampleOne);
console.log(exampleTwo);
