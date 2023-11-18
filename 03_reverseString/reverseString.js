const reverseString = function(word) { 
    let wordString = word.split("").reverse().join('');
    return wordString; 
};

console.log(reverseString); 

// Do not edit below this line
module.exports = reverseString;