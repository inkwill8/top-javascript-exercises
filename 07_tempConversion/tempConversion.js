const convertToCelsius = function(fahrTemp) {

  let celsius = (fahrTemp - 32) * (5 / 9);
  const roundCels = Math.round(celsius * 10) / 10;

  return roundCels;

};

const convertToFahrenheit = function(celsTemp) {

  let fahrenheit = (celsTemp * 9 / 5) + 32;
  const roundFahr = Math.round(fahrenheit * 10) / 10;

  return roundFahr;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
