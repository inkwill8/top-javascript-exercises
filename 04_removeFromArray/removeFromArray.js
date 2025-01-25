const removeFromArray = function(array, value) {

    // let newArray = [];

    // for (const index of array) {
    //     if (index == value) {
    //          array.filter(index);
             
    //     } else {

    //     }

        
    // }

    array.filter(function(value) {
        return array !== value;
    });
};


// Do not edit below this line
module.exports = removeFromArray;
