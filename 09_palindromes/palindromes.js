const palindromes = function (string) {
    
    let temp = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const rev =  temp.split("").reverse().join("");
    if(temp == rev){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
