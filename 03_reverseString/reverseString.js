const reverseString = function(string) {

    //divides the string into individual chars and puts them in an array
    const arrayString = string.split('');

    //need some way to reverse the array indices
    const reverseArrayString = arrayString.reverse();

    //this is what I miss EVERY TIME. this is how you pull a value locked
    //in a loop/function
    let returnValue = '';

    //now need to pull each index out of the array and concatenate again
    for (const index of reverseArrayString) {
        returnValue += index;
    }

    return returnValue;
};

// Do not edit below this line
module.exports = reverseString;
