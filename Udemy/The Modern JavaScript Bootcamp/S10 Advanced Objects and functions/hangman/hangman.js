class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }

  getPuzzle() {
    let puzzle = '';

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });

    return `${puzzle}`;
  }

  makeGuess(guess) {
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
  }

  recalculateGameStatus() {
    if (game1.getPuzzle().includes('*') && this.remainingGuesses > 0) {
      this.status = 'playing';
    } else if (!game1.getPuzzle().includes('*') && this.remainingGuesses > 0) {
      this.status = 'finished';
    } else if (game1.getPuzzle().includes('*') && this.remainingGuesses <= 0) {
      this.status = 'failed';
    }

    return this.status;
  }

  statusMessage() {
    if (game1.status == 'playing') {
      return `${game1.getPuzzle()}. Guesses left: ${game1.remainingGuesses}`;
    } else if (game1.status == 'failed') {
      return `${game1.getPuzzle()}. Nice try! The word was: "${game1.word.join('')}"`;
    } else if (game1.status == 'finished') {
      return `${game1.getPuzzle()}. Great work! You guessed the word.`;
    }
  }
}
