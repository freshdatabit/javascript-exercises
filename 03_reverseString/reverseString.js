const reverseString = function(str) {
    /*
    const strArray = str.split('');
    const reversedArray = strArray.reverse();
    const joinedArray = reversedArray.join('');
    return joinedArray;
    */
   const reversed = str.split('').reverse().join('');
   return reversed;
};

console.log(reverseString('what the hell'))
// Do not edit below this line
module.exports = reverseString;
