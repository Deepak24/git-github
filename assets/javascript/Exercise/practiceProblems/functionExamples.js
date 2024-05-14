/**
 * Description: Solved the function basic example
 */
//1. Factorial of a number
function factorial(n){
    //code here
    let res = 1;
    if(n === 0) 
        return 1;
        
    for(let iCount = 2; iCount <= n; iCount++) {
        res = res * iCount;
    }
    return res;
}

const numFactorial = factorial(25);
console.log(numFactorial);
