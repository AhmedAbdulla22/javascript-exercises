const removeFromArray = function(array,...args) {
    for(const arg of args)
    {
        do {
            const indexOfItem = array.indexOf(arg);
            if(indexOfItem >= 0) {
                array.splice(indexOfItem,1); 
            } else {
                break;
            }
        } while(array.indexOf(arg) >= 0);//check if there is other similar item left
    }
    
    
    return array;
};

//advanced solution from the solution
// function removeFromArray(array, ...args)  {
//     return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
