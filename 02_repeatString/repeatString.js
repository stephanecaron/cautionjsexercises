const repeatString = function(string, num) {
    let resultString = "";
    for (i=0; i<num; i++) {
        resultString += string;
    }
    resultString.length == 0 ? resultString = "" : resultString;
    return(resultString);
};

// Do not edit below this line
module.exports = repeatString;
