const ftoc = function(fTemp) {
 	//[°C] = ([°F] − 32) × 5⁄9
  const celsius = Math.round((fTemp-32)*(5/9) * 10) / 10;
 	return celsius;
};

const ctof = function(cTemp) {
	//[°F] = [°C] × 9⁄5 + 32
  const fahr = Math.round(((cTemp*9/5)+32) * 10) / 10;
 	return fahr;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
