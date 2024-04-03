/**
 * Description: Promise All (array of promises)
 */
let promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 is resolved"), 1000);
});

let promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 is resolved"), 2000);
});

let promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 is resolved"), 3000);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));
promise3.then((res) => console.log(res));

let arrPromises = [promise1, promise2, promise3];
let promise = Promise.all(arrPromises);
console.log(arrPromises);