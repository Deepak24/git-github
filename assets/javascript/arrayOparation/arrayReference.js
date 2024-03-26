/**
 * Description: Array Reference
 */
let arr1 = [1,2,3];//It is created at memory location - abc
let arr2 = [4,5,6];//
let arr3 = arr1; // The newly created array also pointing to the same memory location
//Shallow copy
console.log("Arr1 => ", arr1);
console.log("Arr3 =>", arr3);

arr3.push(7);
console.log("Arr 1", arr1);
console.log("Arr3 => ", arr3);

//Spread operator
let arr4 = [...arr1];
console.log("Arr4 => ", arr4);
arr4.push(8);
console.log(arr1);
console.log(arr4);

//Using the For loop
console.log("We are using for loop for copying");
let arr5 = [];
for (let number1 of arr3){
    arr5.push(number1);
}
console.log(arr5);