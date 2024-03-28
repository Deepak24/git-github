/**
 * Description : JS Reduce example
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