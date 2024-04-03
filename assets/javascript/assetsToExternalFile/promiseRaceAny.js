/**
 * Description: Promise race
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