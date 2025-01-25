const removeFromArray = function(array, value) {

    let newArray = [];

    for (const index of array) {
        if (index == value) {
             array.splice(index);
        } else {

        }
    }
};


// Do not edit below this line
module.exports = removeFromArray;
