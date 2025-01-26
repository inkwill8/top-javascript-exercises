const removeFromArray = function(array, ...values) {

    for (const value of values) {
    array = array.filter((index) => index !== value);

    }

    return array;

};


// Do not edit below this line
module.exports = removeFromArray;
