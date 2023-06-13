const getCountryCode = (countryCode) => {
  return fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('You made and error');
      }
    })
    .then((data) => {
      return data.find((country) => country.cca2 === countryCode);
    });
};

const getLocation = () => {
  return fetch('https://ipinfo.io/json?token=a85cd3ad025832').then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Unable to fetch location');
    }
  });
};
