/**
 * Description: Sorting the array
 */

const arrFriuts = ["apple", "cherry", "orange", "banana", "pineaaple"];
arrFriuts.sort();
console.log(arrFriuts);

//Number sorting
const arrNumbers = [1, 4, 5, 8, 6, 7, 3, 11];
arrNumbers.sort();
console.log(arrNumbers);

///Number sorting with callback
function sortInteger(a, b){
    return a - b;
}

const arrNums = [1, 5, 3, 8, 9, 11, 25];
arrNums.sort(sortInteger);
console.log(arrNums);