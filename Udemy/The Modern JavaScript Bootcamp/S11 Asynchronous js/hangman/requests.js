const getCountryCode = (countryCode) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find((country) => country.cca2 === countryCode);
        resolve(`The country name: ${country.name.official}`);
      } else if (e.target.readyState === 4) {
        reject('An error has taken place');
      }
    });

    request.open('GET', 'https://restcountries.com/v3.1/all');
    request.send();
  });
