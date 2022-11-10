let fahrenheitToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * 5 / 9;
    return tempCelsius;
}

console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(68));
