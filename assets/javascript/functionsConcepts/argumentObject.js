/**
 * Description: Argument Object
*               Arguments object is an array like object present locally inside a function
                and it contains all the arguments passed to function

                - All the regular function instead of arrow function have special object 
                called Arguments Object that contains all the arguments passed  to a function
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