/**
 * Description: Promise race/any
 *              Race - Instead of waiting for all promises to settle, 
 *                     it only waits for the first one to settle and retrieves its result or error.
 * 
 *              Any - The method will return the first promise that finishes successfully. 
 *                    It executes until the first promise become successful. 
 *                    And as soon as get result then other promises will stop executing.
 * 
 */
let promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 is resolved"), 3000);
});

let promise2 = new Promise((_, reject) => {
    setTimeout(() => reject("Promise 2 is reject"), 2000);
});

let promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 is resolved"), 1000);
});

let arrPromises = [promise1, promise2, promise3];
let promise = Promise.race(arrPromises);
console.log(arrPromises);

promise.then((response) => console.log(response) );

let promise12 = Promise.any(arrPromises);
console.log(arrPromises);

promise12.then((response) => console.log(response) );