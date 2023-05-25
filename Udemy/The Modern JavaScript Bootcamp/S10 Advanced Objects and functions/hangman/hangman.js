const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'playing';
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = '';

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  });

  return `${puzzle}`;
};

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }

  this.recalculateGameStatus();

  console.log(this.recalculateGameStatus());
};

Hangman.prototype.recalculateGameStatus = function () {
  if (game1.getPuzzle().includes('*') && this.remainingGuesses > 0) {
    this.status = 'playing';
  } else if (!game1.getPuzzle().includes('*') && this.remainingGuesses > 0) {
    this.status = 'finished';
  } else if (game1.getPuzzle().includes('*') && this.remainingGuesses <= 0) {
    this.status = 'failed';
  }

  return this.status;
};
