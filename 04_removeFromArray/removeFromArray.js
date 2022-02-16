const removeFromArray = function(...elements) {// ... rest parameter for unspecified number of arguments
	//initialise new array
	let arr = elements[0];
    let newArr = [];
	//search old array with element
   arr.forEach((element) => {
    if (!elements.includes(element)) {
      newArr.push(element);
    }
  });
	//if element not equal to array item, push array item to new array 
	return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
