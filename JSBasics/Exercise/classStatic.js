/**
 * Description: Static method
 */
class Person {
    static count = 0;
    constructor(strName){
        this.strName = strName;
        Person.count++;
    }
}

let person1 = new Person("John");
let person2 = new Person("Jane");
let person3 = new Person("Jack");

console.log(person1.count);
console.log(Person.count);
console.log(person2.count);
console.log(Person.count);
console.log(person3.count);
