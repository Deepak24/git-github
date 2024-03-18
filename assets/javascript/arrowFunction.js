/**
 * Function Use: Example of Arrow Function
 */

const addFunction = () => {
    let a = 5, b=6;
    return a+b;
}

console.log(addFunction());

///Number multiplication
const MultiNumber = num => num * num;
console.log(MultiNumber(5));

let utility = (a,b) => (a*b)*(a%b);

console.log(utility(12, 11));