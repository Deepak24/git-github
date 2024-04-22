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
  