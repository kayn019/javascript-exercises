const removeFromArray = function(arr, remove) {
// get all arguments that needs to be removed by looping
    for(let i = 1; i < arguments.length; i++ ){
        // loop until there is no multiple value exist
        while(arr.indexOf(arguments[i]) != -1){
            let index = arr.indexOf(arguments[i]);
            // and remove that value from the array 
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
