const sumAll = function(startInt, endInt) {

    // define a var to hold the range of integers
    let range = [];

    // create a condition which triggers a certain function depending on which argument is greater
    if (startInt < endInt) {
        smallStart();
    } else if (startInt > endInt) {
        bigStart();
    }


    // given a starting and ending integer, find all the values between and INCLUDING those integers
    function smallStart() {
    let i = startInt;
    while (i <= endInt) {
        range.push(i);
        i++;
    }
    }

    function bigStart() {
        let i = startInt;
        while (i >= endInt) {
            range.push(i);
            i--;
        }
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
