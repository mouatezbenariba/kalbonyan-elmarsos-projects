// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

// Making an HTTP request
const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();

countryCode = 'DZ';

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    // data.forEach((country) => {
    //   if (country.cca2 === countryCode) {
    //     console.log(country.name.official);
    //   }
    // });

    const country = data.find((country) => country.cca2 === countryCode);

    console.log(country.name.official);
  }
});
