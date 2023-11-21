const sumAll = function(starter,ender) {
    if (starter < 0 || ender < 0) {
        return 'ERROR'
    }

    if (typeof (starter + ender) === "string") {
        return 'ERROR'
    }

    let total = 0;
    let pointer = Math.min(starter,ender)
    let highest = Math.max(starter,ender)
    while (pointer<=highest) {
        total += pointer
        pointer++
    }
    return total

};

console.log(sumAll(10, [90, 1]))

// Do not edit below this line
module.exports = sumAll;
