const sumAll = function(a,b) {
    let sum = 0;
    
    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    else if( a > b) {
        [a,b] = [b,a];
    }

    for (let index = a; index <= b; index++) {
            sum += index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
