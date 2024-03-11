const fibonacci = function(num) {
    if(num >= 0){
        const arr = [0,1];
        for(let i=0; i < 100; i++){
            const newFib = arr[i] + arr[i+1];
            arr.push(newFib);
        }
        return arr.at(num);
    }else{
        return 'OOPS';
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
