/**
 * Description: JavaScript exercise changes from exercise 5
 */
//6
const myPromise1 = Promise.resolve(Promise.resolve('Promise!'));

function funcOne() {
	myPromise1.then(res => res).then(res => console.log(res));
	setTimeout(() => console.log('Timeout!', 0));
	console.log('Last line!');
}

async function funcTwo() {
	const res = await myPromise1;
    //Here await makes the difference by making the function to pause the execution and wait till resolve promise.
	console.log(await res);
	setTimeout(() => console.log('Timeout!', 0));
	console.log('Last line!');
}

funcOne();
funcTwo();

//Output
/**
Last line!
Promise!
Promise!
Last line!
Timeout! 0
Timeout! 0 
 */

const myPromise2 = () => Promise.resolve('I have resolved!');

function firstFunction() {
	myPromise2().then(res => console.log(res));
	console.log('second');
}

async function secondFunction() {
	console.log(await myPromise2());
	console.log('second');
}
firstFunction();
secondFunction();
//Output
/**
second
I have resolved!
I have resolved!
second
 */