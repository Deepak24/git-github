/**
 * Description: Convert odd numbers to even and vice versa
 */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = arr1.map( num => num %2 === 0 ? num -1 : num +1);
console.log(result);