const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessed = ['a'];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = '';
  this.guessed.forEach((guess) => {
    this.word.forEach((letter) => {
      if (letter === guess) {
        puzzle += guess;
      } else {
        puzzle += '*';
      }
    });
  });

  return `${puzzle}`;
};

const game1 = new Hangman('Cat', 2);
console.log(game1);
console.log(game1.getPuzzle());

const game2 = new Hangman('New Jersey', 4);
console.log(game2);
console.log(game2.getPuzzle());
