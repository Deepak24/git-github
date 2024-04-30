/**
 * Description: JavaScript Question and answer - Exercise 5
 */

//1
function fun()
{
    let count=0;
    return function fun2()
    {
     count++;
     console.log(count);
    }
}

let res = fun();
res();
res();
//Output - 1 2

//2  - Promise example
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Error 1'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'Result 2'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, 'Result 3'));

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
//Output  - Error 1

//3  - Promise exercise
const myPromise = Promise.resolve('Woah some cool data');
(async () => {
	try {
		console.log(await myPromise);
	}
	catch {
		throw new Error("Oops didn't work");
	}
	finally {
		console.log('Oh finally!');
	}
})();
//Output 
//- Woah some cool data Oh finally!

//4 - Promise 
const firstPromise = new Promise((res, rej) => {
	setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
	setTimeout(res, 100, 'two');
});

//race function waits until first promise to settle and retrieves it's result or error
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

//Output - two

//5
const promise11 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'Error 1'));
const promise22 = new Promise((resolve) => setTimeout(resolve, 1000, 'Result 2'));
const promise33 = new Promise((resolve) => setTimeout(resolve, 1500, 'Result 3'));

//Promise.any(), the method will return the first promise that finishes successfully
Promise.any([promise11, promise22, promise33])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//Output - Result 2

//7
const p1 = new Promise(
	(resolve, reject) => setTimeout(resolve, 100, 'Hello')
);

const p2 = new Promise(
	(resolve, reject) => setTimeout(resolve, 120, 'Goodbye')
);

const p3 = new Promise((resolve, reject) =>
 setTimeout(reject, 10, 'Oops!')
);


Promise.race([p1, p2, p3])
 .then((result) => console.log(result))
 .catch((reason) => console.log("Something went wrong..."));

 ///Output - Something went wrong...


 //8 - we have to execute multiple promises in parallel and wait until all of them are ready

const promise12 = Promise.resolve('Hello');
const promise23 = new Promise((resolve) => setTimeout(resolve, 2000, 'World'));
const promise34 = fetch('https://api.github.com/');

const promises112 = [promise12, promise23, promise34];

Promise.all(promises112)
 .then((results) => {
   console.log(results);
 })
 .catch((error) => {
   console.error(error);
 });

 //Output 
 /*
 'Hello',
  'World',
  Response 
  */

//10
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
let promise = job(true);
promise
.then(function(data) {
    console.log(data);
    return job(true);
})
.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }
    return job(true);
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
    return job(false);
})
.then(function(data) {
    console.log(data);
    return job(true);
})
.catch(function(error) {
    console.log(error);
    return 'Error caught';
})
.then(function(data) {
    console.log(data);
    return new Error('test');
})
.then(function(data) {
    console.log('Success:', data.message);
})
.catch(function(data) {
    console.log('Error:', data.message);
});
