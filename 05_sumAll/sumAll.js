const sumAll = function(startInt, endInt) {

    let range = [];

    // given a starting and ending integer, find all the values between and INCLUDING those integers

    let i = startInt;
    while (i <= endInt) {
        range.push(i);
        i++;
    }

    // define a var to store the added values
    let sum = 0;

    // iterate over the range[] array and add each integer to the previous value

    for (const int of range) {

        // below is the shorthand way to add the values of left and right operands and assign it 
        // back to the left. so same as saying sum = sum + int
        sum += int;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
