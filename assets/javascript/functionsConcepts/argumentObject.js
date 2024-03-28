/**
 * Description: Argument Object
*               Arguments object is an array like object present locally inside a function
                and it contain value of all the arguments passed to function
 */

function calculateTotal(){
    let sum = 0;
    console.log(arguments.length);
    // arguments[0] = 9;
    console.log(arguments);
    for (let value of arguments) {
        sum += value;
    }
    return sum;
}


const intTotal = calculateTotal(8, 2, 3, 4, 6);
console.log(intTotal);

//If arguments object have default value then it's value is not going to change

function calculateTtl(a = 10) {
    console.log(a);
    console.log(arguments);
    arguments[0] = 9;
    console.log(a);
    console.log(arguments);
}
calculateTtl(6);