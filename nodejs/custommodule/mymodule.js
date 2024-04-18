/**
 * Node JS Example - Module
 */
const mydata = {
    success : (message) => {
        console.log("Success message is : " + message);
    },
    warning: (message) => {
        console.log("Warning message is : " + message);
    },
    error : (message) => {
        console.log("Error message is : " + message);
    },
}

const PRO_TITLE = "Shopping Cart";
module.exports = { mydata, PRO_TITLE };
