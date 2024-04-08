/**
 * 
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
 
 
let res=fun();
res();
res();

//2
const myPromise = Promise.resolve('Woah some cool data');
(async () => {
	try {
		console.log(await myPromise);
	}
	catch {
		throw new Error(

);
	}
	finally {
		console.log('Oh finally!');
	}
})();

//3
async function getData() {
	return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);

//
const myArray = [1, 2, 3, 4, 5];
const result = myArray
 .filter(num => num % 2 === 0)
 .map(num => num * 2)
 .reduce((acc, curr) => acc + curr, 0);
console.log(result);

//
async function f() {
	let result = 'first!';
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('done!'), 1000);
	});
	
	result = await promise;
	console.log(result);
}
f();