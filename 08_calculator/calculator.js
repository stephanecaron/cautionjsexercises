const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(numsArray) {
  let total = 0;
	numsArray.forEach((num) => {
    total += num
  })
  return total
};

const multiply = function(numsArray) {
  let total = numsArray[0] ? numsArray[0] : 0;
  numsArray.shift();
  numsArray.forEach((num) =>{
      total = total * num
  })
  return total
};

const power = function(num1,num2) {
  return Math.pow(num1,num2)
	
};

const factorial = function(num) {
  let starter = num;
  let total = starter ? starter : 1;
  starter--
  while (starter>0) {
    total = total * starter
    starter--
  }
	return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
