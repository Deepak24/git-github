/**
 * Description: Recursion function
 *              Recursion is writting the piece of code by calling the same function
 *              from within that function
 */

// function calculate(x){
//     if(x == 3 ){
//         calculate(3);
//     }
// }

//Normal way of sum
function calculateSum(number1 ) {
    let total = 0;
    for (let i=0; i <= 10; i++){
        total = total + i;
    }
    return total;
}

const result = calculateSum(10);
console.log(result);

function calculateRecursiveSum() {

}

const totalSum = calculateRecursiveSum(10);
console.log(totalSum);