const sumAll = function (x, y) {
    let totalSum = 0
    let max = Math.max(x, y);
    let min = Math.min(x, y);
    /*
    if (x === '' || (isNaN(x)) || Array.isArray(x)) {
        return 'ERROR'
    }
    */
    if ([x, y].some(function (arg) {
        return typeof arg !== 'number' || Array.isArray(arg) || isNaN(arg) || (arg < 0)
    })) {
        return 'ERROR';
    }
    //arg is the value of x and y we input that is then held there as it is compared to the conditions we set
    for (let i = min; i <= max; i++) {
        totalSum += i;
    }
    return Math.abs(totalSum)
}

console.log(sumAll(10, '90'))

// Do not edit below this line
module.exports = sumAll;
