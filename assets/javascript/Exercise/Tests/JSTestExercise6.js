/**
 * Description: JavaScript Question and answer - Exercise 6
 */

//1

function outer() {
    let x = 10;
  
    function inner() {
      console.log(x);
    }
  
    x = 20;
    return inner;
}

const foo = outer();
foo();

//2
// class Counter {
// 	static count = 0;
// 	increment() {
//   		this.count++;
// 	}
// }
// Counter.increment()
// console.log(Counter.count);

//Output - error

//3
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
//Output
/**
1
3
4
2
0
[ 0, 1, 2, 3, 4 ]
 */

//4
function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  counter.increment();
  console.log("Counter ", counter.getCount());