/**
 *Description: JavaScript Question and answer - Exercise 8 
 */
//1
function Car() {
    this.make = 'Ferrari';
    return { make: 'Mustang' };
}

const myCar = new Car();
console.log(myCar.make);//Output - Mustang

//2 - Prototype example
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