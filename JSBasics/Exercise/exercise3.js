//1
function outer() {
    let x =10;
    function inner() {
        console.log(x);
    }
    x=20;
    return inner
}

const foo = outer();
foo();

//2
function add(x) {
    return function(y) {
        return x + y;
    };
}

const addFive =  add(5);
console.log(addFive(3));

//3

// polyfill.js
String.format = function(format, ...args) {
    return format.replace(/{(d+)}/g, (match, index) => args[index] || '');
  };
  
  // main.js
  var name1 = 'Alice';
  var message = String.format('Hello, {0}!', name1);
  console.log(message);

  //4
  
function delayPrint(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(num);
        resolve(num);
      }, Math.random() * 1000);
    });
  }
  
  async function printNumbers() {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(delayPrint(i));
    }
    const results = await Promise.all(promises);
    console.log(results);
  }
  
  printNumbers();

  const arr3 = [];
  console.log("Heloo " , typeof arr3);
  

//
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log (event.toLocaleString('en-IN', { timeZone: 'UTC' }));

//
function Car() {
  this.make = 'Ferrari';
  return { make: 'Mustang' };
}

const myCar = new Car();
console.log(myCar.make);

//

Array.prototype.ourMap = function(callback) {
	var arr = [];

	for (var i = 0; i < this.length; i++) {
		var result=callback(this[i], i, this);
		arr.push(result);
	}

	return arr;
}



const myNumberArray = [1 , 2 , 3 , 4 , 5];
const mapThoseNumbers = myNumberArray.map(function(myNumber) {
	if(myNumber > 3) return myNumber;
})

console.log(mapThoseNumbers);
