const convertToCelsius = function(tempF) {
  return (tempF - 32) * (5/9);
};

const convertToFahrenheit = function(tempC) {
 return (tempC * (9/5)) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
