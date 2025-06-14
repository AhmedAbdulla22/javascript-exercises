const convertToCelsius = function(Fahrenheit) {
  const Celsius = (Fahrenheit - 32) * (5/9);
  return (Number.isInteger(Celsius)) ? Celsius : Number(Celsius.toFixed(1));
};

const convertToFahrenheit = function(Celsius) {
  const Fahrenheit = (Celsius * (9/5)) + 32; 
  return (Number.isInteger(Fahrenheit)) ? Fahrenheit :Number(Fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
