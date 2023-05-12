function removeFromArray(array, ...args){
    return array.filter(function(any){
        return !args.includes(any);
    })
}


// Do not edit below this line
module.exports = removeFromArray;
