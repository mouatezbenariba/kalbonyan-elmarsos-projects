const game1 = new Hangman('Cat', 5);

window.addEventListener('keypress', function (e) {
  game1.makeGuess(e.key);
  const solution = document.createElement('p');
  const solutionContent = document.createTextNode(
    `${game1.getPuzzle()}, the remaining guesses are: ${game1.remainingGuesses}`
  );
  solution.appendChild(solutionContent);
  document.body.append(solution);
});
