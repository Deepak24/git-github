/**
 * Description: Callback functions
 *              Function passing as parameter to function
 */

function a(wrapper) {
    console.log("Hello");//Output : Hello
    console.log(wrapper);//Output - [Function: b]
    wrapper();
}

function b(){
    console.log("Bye!");
}

//calling the function
a(b);

//With setTimeout web API
console.log("Hello in Next console");
setTimeout(function callback() {
    console.log("Executed after delay");//Executed after delayed of 2 seconds
}, 2000);
