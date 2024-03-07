const reverseString = function(str) {
    let string = "";
    for(let i = -1; i >= (str.length * -1); i--){
        string += str.at(i);

    }
    return string;
};


// Do not edit below this line
module.exports = reverseString;
