const repeatString = function(word,times) {
    if(times < 0) return "ERROR"; 
    let string =""; //Created a variable to hold the string you're going to return 
    for (let i = 0; i < times; i++) {
        string += word;
    }
    return string; 
};

// Do not edit below this line
module.exports = repeatString;
