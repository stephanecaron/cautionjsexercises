const getTheTitles = function(books) {
    let titlesArray = [];
    for (var k in books) {
        titlesArray.push(books[k]["title"])
    }
    return titlesArray
};

// Do not edit below this line
module.exports = getTheTitles;
