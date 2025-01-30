const leapYears = function(year) {
    const fourDivisible = year % 4 === 0;
    const century = year % 100 === 0;
    const fourHundredDivisible = year % 400 === 0;

    if (fourDivisible && (!century || fourHundredDivisible)) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
