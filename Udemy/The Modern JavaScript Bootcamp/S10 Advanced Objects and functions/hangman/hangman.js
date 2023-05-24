const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessed = [];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = '';

  this.word.forEach((letter) => {
    if (this.guessed.includes(letter)) {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });

  return `${puzzle}, it remains ${this.remainingGuesses} guesses.`;
};

Hangman.prototype.guessPuzzle = function (guessedLetter) {
  // accept a character for guessing
  let list = guessedLetter.split(',');

  // add unique guesses to the list of guesses
  list.forEach((item) => {
    if (!this.guessed.includes(item)) {
      this.guessed.push(item);
    }
  });

  // decrement the guesses left if a unique guess isn't a match
  this.remainingGuesses -= this.guessed.length;

  return this.guessed;
};

const game1 = new Hangman('Cat', 5);
console.log(game1.guessPuzzle('c,d,c'));
console.log(game1.getPuzzle());

// console.log(game1);
// console.log(game1.getPuzzle());

// const game2 = new Hangman('New Jersey', 4);
// console.log(game2);
// console.log(game2.getPuzzle());
