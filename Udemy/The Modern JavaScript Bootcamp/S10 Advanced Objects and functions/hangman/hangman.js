const Hangman = function (word, attempts) {
  this.word = word;
  this.attempts = attempts;
};

const game1 = new Hangman('cat', 2);
console.log(game1);

const game2 = new Hangman('Constantine', 3);
console.log(game2);
