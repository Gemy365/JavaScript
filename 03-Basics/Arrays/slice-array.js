const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 4, 0]

const length = numbers.length;
const middle = Math.floor(length / 2)   // Floor makes 5.5 --> 5
const left = numbers.slice(0, middle)   // From index 0 to index middle -1
const right = numbers.slice(middle)     // From middle to end of array

console.log('The Left Side Of Array', left)
console.log('The right Side Of Array', right)