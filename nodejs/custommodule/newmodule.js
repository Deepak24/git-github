/**
 * Node JS - example for new way of module
 */

const TITLE = "Ecommerce App";
const add = (a,b) => {
    return (a+b);
}

class Test {
    testFunc() {
        console.log("Example of module");
    }
}

export {TITLE, add, Test};