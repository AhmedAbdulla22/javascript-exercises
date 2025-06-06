const repeatString = function(text,times) {
    if(text === '' || times === 0) return '';
    else if(times < 0) return 'ERROR';

    let res = '';
    for (let index = 0; index < times; index++) {
        res += text;
    }

    return res;
};

// Do not edit below this line
module.exports = repeatString;
