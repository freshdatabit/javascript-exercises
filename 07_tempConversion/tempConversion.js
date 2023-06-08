const convertToCelsius = function(celsius) {
  return (celsius - 32) * 5/9
};

const convertToFahrenheit = function(fahrenheit) {
  return (fahrenheit * 9/5) +32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
