const sumAll = function(first,last) {
  if (first <0 || last < 0 || !Number.isInteger(first) || !Number.isInteger(last)){
    return "ERROR";
  }  else {
    if(first>last){
      let newOne = first;//save a new variable for first
      first = last;
      last = newOne;
    }
	let sum = 0;
	for (let i = first; i <= last; i++) {
      //console.log(i);
		sum += i;
	}
	return sum;}
};

//Do not edit below this line
module.exports = sumAll;
