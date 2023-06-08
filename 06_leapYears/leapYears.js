const leapYears = function(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false
    }
};

console.log(leapYears(2013))

// Do not edit below this line
module.exports = leapYears;
