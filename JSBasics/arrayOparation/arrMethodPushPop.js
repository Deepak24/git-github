/**
 * Description: Checking the JS array methods, push, pop slice
 */

//Array Push method example

function arrPushFunc(){
    var arrPush = ["one", "two", "three"];
    arrPush.push("four");
    console.log(arrPush);
}
arrPushFunc();

//Pushing array at the end
var arrPush = [34, 55, 44];
console.log(arrPush.push(24, 25, 21));
console.log(arrPush);

//Pushing object at the end of array
var arrWithObj = [14, 25, 69, 45];
console.log(arrWithObj.push("abc", 28, "one"));
console.log(arrWithObj);

//Array pop

var arrPop = [15, 16, 25, 52];
console.log(arrPop.pop());
console.log(arrPop);

var arrEmpty = [];
console.log(arrEmpty.pop());

//Slice method - it gives portion of the array 

function arrSlice() {
    var arrOriginal = [15, 14, 12, 13, 45, 56];
    var arrSlice = arrOriginal.slice(1, 3);
    console.log(arrOriginal);
    console.log(arrSlice);

    console.log("Getting entire slice from selection to end");
    console.log(arrOriginal.slice(2));
    console.log("Getting entire slice array");
    console.log(arrOriginal.slice());
}
arrSlice();
