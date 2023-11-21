const findTheOldest = function(people) {
    let peopleAgeMap = people.map(people => ({
            name: people.name,
            age: (findAge(people.yearOfDeath,people.yearOfBirth)) }));
    peopleAgeMap.sort((a, b) => b.age - a.age) 
    console.log(peopleAgeMap[0]["key"])
    return peopleAgeMap[0]
};

const findAge = function(yearOfDeath,yearOfBirth) {
    return !yearOfDeath ? new Date().getFullYear() - yearOfBirth : yearOfDeath - yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;

