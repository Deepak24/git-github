
/**
 * Description: JS test exercise class example
 */
class Animal {
    constructor(name) {
      this._name = name;
    }
   
   
    makeSound() {
      console.log("Animal sound");
    }
}
   
class Dog extends Animal {
    constructor(name) {
      super(name);
    }
   
   
    makeSound() {
      console.log("Woof!");
    }
   
   
    greet() {
      console.log("Hello, myname is", $this.name);
    }
}
   
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy");

console.log(animal._name);
console.log(dog._name);    

//Calling the child class methods
dog.makeSound();           
dog.greet();             
    