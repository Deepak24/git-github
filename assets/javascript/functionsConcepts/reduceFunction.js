/**
 * Description : JS Reduce example
 *              - It reduces all the elements of the array to a single value by repeatedly applying a function
 *
 */
const arr1 = [1,2,3,4,5,6,7,8];

const reduceFun = (acc, curr) => acc + curr; // 0 + 1= 1 --> acc    

const output = arr1.reduce(reduceFun, 0);

console.log(output);

const customOutput = arr1.reduce((acc, curr) => {
    return sum = acc + curr * 2;
});

console.log(customOutput);

///get result by multiplying the each number
const arr2 = new Array(1, 2, 3, 6, 5, 4);
result = 1
for(let i = 0; i < 6; i++) {
    result = result * arr2[i];
}
console.log(result);