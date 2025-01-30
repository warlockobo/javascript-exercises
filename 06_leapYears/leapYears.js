const leapYears = function(year) {
    const fourDivisible = year % 4 === 0;
    const century = year % 100 === 0;
    const fourHundredDivisble = year % 400 === 0;

    if (fourDivisble && (!century || fourHundredDivisible)) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
