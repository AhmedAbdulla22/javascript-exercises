const leapYears = function(year) {
    // return ((year % 100 === 0 && year % 400 === 0 ) || year % 4 === 0 && year % 100 !== 0)
    const isDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleBy400 = year % 400 === 0;

    if(isDivisibleByFour && (!isCentury || isDivisibleBy400)) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
