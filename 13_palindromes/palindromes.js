
const palindromes = function (text) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    
    text = text.toLowerCase()
    .split('')
    .filter(char => alphanumerical.includes(char))
    .join('');

    const reversedString = text.split('').reverse().join(''); 
    
    return (text === reversedString);
};

// Do not edit below this line
module.exports = palindromes;
