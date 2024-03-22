/**
 * Description: Function Exercise
 */

//Sum of all numbers from 1..20
function calculateSum(min, max){
    let Total = 0;
    for(let i = min; i <= max; i ++) {
        Total = Total + i;
        // console.log(Total);
    }
    return Total;
}

const result = calculateSum(1, 20);
console.log(result);

const newResult = calculateSum(20, 100);
console.log(newResult);