const findTheOldest = function(arrayOfPeople) {
	let ages = arrayOfPeople.map((person) => [person.yearOfDeath - person.yearOfBirth]

return ages;
};

// Do not edit below this line
module.exports = findTheOldest;
