/**
 * Description: Class Inheritance
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

class Lenovo {

}
