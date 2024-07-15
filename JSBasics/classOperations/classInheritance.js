/**
 * Description: Class Inheritance
 *              Inheritance refers to ability of child class to inherit properties and methods of parent class in child class
 */
//Parent class
class Laptop {
    constructor(ram, processor, generation) {
        this.ram = ram;
        this.processor = processor;
        this.generation = generation;
    }

}

//Sub class / Child
class Dell extends Laptop {
    constructor(ram, processor, generation, modelName, price) {
        super(ram, processor, generation);
        this.modelName = modelName;
        this.price = price;
    }

    displayMessage (){
        console.log(`Laptop spec :: Ram ${this.ram} - Processor ${this.processor} - ${this.generation} Gen - modelName ${this.modelName} - Price is ${this.price}`);
    } 
}

const dell1 =  new Dell("8GM", "Intel", 15, "D3250", 45000);
console.log(dell1);
const del12 = new Dell("4GB","AMD", 12, "BM-2334", 40000);
console.log(del12);

class Lenovo {

}
