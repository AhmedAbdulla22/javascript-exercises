const reverseString = function(words) {
    //MY old way to solve this!!!!!!!!!!!!!!!!!
    // if(words === '') return '';

    // let splitedWords = words.split(' ');

    // let reversedWords = [];
    
    // for (let i = 0; i < splitedWords.length; i++) {
    //     let reversed = '';
    //     for (let j = splitedWords[i].length - 1; j >= 0; j--) {
    //         reversed += splitedWords[i][j];
    //     }
    //     reversedWords.push(reversed);
    // }

    // let result = reversedWords[reversedWords.length-1];
    
    // if(reversedWords.length === 1) return result;
    

    // //skip last word by adding -2 to length
    // for (let index = reversedWords.length - 2; index >= 0; index--) {
    //     result += ' ' + reversedWords[index];
    // }

    // return result;

    //this is character level reversal
    return words.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
