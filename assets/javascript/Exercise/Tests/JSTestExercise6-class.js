/**
 * Description: JavaScript Test exercise
 */


class Counter {
    #count = 0;
  
    constructor() {
      this.#count = 10;
    }
  
    increment() {
      this.#count++;
    }
  
    decrement() {
      this.#count--;
    }
  
    getCount() {
      return this.#count;
    }
}
  
const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.count);