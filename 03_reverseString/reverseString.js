const reverseString = function(string) {
	const split = string.split("");
	let reversed = [];
	for ( i = split.length; i >= 0; i--) {
		reversed.push(split[i]);
	}
	return reversed.join("");

};
console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
