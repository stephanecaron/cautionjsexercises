const convertToCelsius = function(f) {
  return parseFloat(((f - 32) * (5 / 9)).toFixed(1))
};

const convertToFahrenheit = function(c) {
  return Math.round((c * (9 / 5) + 32) * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};