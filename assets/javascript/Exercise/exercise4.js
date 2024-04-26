
//
console.log("Output")
const person = { name: 'Sam Altman' };

function sayHi(age) {
  return 

;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 25));

//
function* generator(i) {
  yield i;
  yield i * 2;
 }
 const gen = generator(10);
 console.log(gen.next().value);
 console.log(gen.next().value);

 //
 (() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

//
function makeSandwich() {
    return 'Making sandwich!';
  }
  
  const eatSandwich = () =>
    "Eating sandwich!";
  
  console.log(makeSandwich.prototype);
  console.log(eatSandwich.prototype);

  //
const person2 = { name1: 'Ramesh' };

Object.defineProperty(person2, 'age', { value: 24 });

console.log(person2);
console.log(Object.keys(person2));