/**
 * Description : JS test exercise 
 */

class Shape {
    constructor(color) {
        this.color = color;
    }
  
    getInfo() {
        return;
    }
}
  
class Circle extends Shape {
    constructor(color, radius) {
        //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        super(color);
        this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
}
  
const circle = new Circle("red", 5);
console.log(circle);