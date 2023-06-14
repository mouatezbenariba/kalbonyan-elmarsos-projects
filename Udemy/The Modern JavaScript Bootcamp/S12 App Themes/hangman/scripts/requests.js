const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to get puzzle');
  }
};

const getCountryCode = async (countryCode) => {
  const response = await fetch('https://restcountries.com/v3.1/all');

  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.cca2 === countryCode);
  } else {
    throw new Error('You made and error');
  }
};

const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=a85cd3ad025832');

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Unable to fetch');
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountryCode(location.country);
  return country.name.official;
};
