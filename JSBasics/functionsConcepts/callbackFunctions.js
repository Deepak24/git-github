/**
 * Description: Callback functions
 *              Function passing as parameter to function
 */

function a(wrapper) {
    console.log("Hello");
    console.log(wrapper);
    wrapper();
}

function b(){
    console.log("Bye!");
}

//calling the function
a(b);

//With setTimeout web API
console.log("Hello");
setTimeout(function callback() {
    console.log("Executed after delay");
}, 2000);

