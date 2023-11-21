const fibonacci = function(num) {
    numsArray = [];
    num = parseInt(num)
    if (num<0) {
        return "OOPS"
    }
    for (i=0;i<num;i++) {
        numsArray.length<2 ? numsArray.push(1) : numsArray.push(numsArray[numsArray.length-1]+numsArray[numsArray.length-2]);
    }
    return numsArray.pop()
};

// Do not edit below this line
module.exports = fibonacci;

