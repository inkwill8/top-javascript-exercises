const leapYears = function(year) {

    // to be a leap year the input must be: divisible by 4
    if (year % 4 == 0 &&
        year % 100 !== 0 
        ||
        year % 400 == 0 && 
        year % 4 == 0)
    {
            return true;
    }   else {
        return false;
    }
};


// Do not edit below this line
module.exports = leapYears;
