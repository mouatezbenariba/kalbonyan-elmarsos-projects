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

// getCountryCode('DZ')
//   .then((country) => {
//     console.log(country.name.official);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getLocation()
//   .then((data) => {
//     console.log(`You are currently in : ${data.city}, ${data.region}, ${data.country}`);
//   })
//   .catch((error) => console.log(error));

getCountryCode('DZ')
  .then((country) => {
    console.log(country.name.official);
  })
  .catch((error) => {
    console.log(error);
  });

getLocation()
  .then((location) => {
    getCountryCode(location.country.toUpperCase()).then((country) => {
      console.log(
        `You are currently in : ${location.city}, ${location.region}, ${country.name.official}`
      );
    });
  })
  .catch((error) => console.log(error));
