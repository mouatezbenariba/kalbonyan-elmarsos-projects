const getCountryCode = (countryCode, callback) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://restcountries.com/v3.1/all');
  request.send();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find((country) => country.cca2 === countryCode);
      callback(undefined, country.name.official);
    } else if (e.target.readyState === 4) {
      callback('An error has taken place', undefined);
    }
  });
};
