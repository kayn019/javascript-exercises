const sumAll = function(num1, num2) {
    let sum = 0;
    let max;
    let min;

    if((num1 > 0 && num2 > 0) && Number.isInteger(num1) && Number.isInteger(num2)){
        if(num1 >= num2){
            max = num1;
            min = num2;
        }else{
            max = num2;
            min = num1;
        }
    
        for(let i = min; i <= max; i++){
            sum += i;
        }
        return sum;
    }else{
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
