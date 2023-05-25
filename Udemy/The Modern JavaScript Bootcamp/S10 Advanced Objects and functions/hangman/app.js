const game1 = new Hangman('Cat', 5);

window.addEventListener('keypress', function (e) {
  if (game1.status === 'playing') {
    game1.makeGuess(e.key);

    const solution = document.createElement('p');
    solution.innerText = game1.statusMessage();

    document.body.append(solution);
  }
});
