/**
 * Description: Promise All (array of promises)
 */
let promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 is resolved"), 400);
});

let promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 is resolved"), 600);
});

let promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 is resolved"), 300);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));
promise3.then((res) => console.log(res));

let arrPromises = [promise1, promise2, promise3];
let promise = Promise.all(arrPromises);
console.log(arrPromises);
console.log(promise);