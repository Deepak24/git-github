/**
 * Description: JavaScript Question and answer - Exercise 7
 */
//1
for(let i=1;i<=3;i++) {
	setTimeout(function (){
		console.log(i);
	}, Math.random() *1000);
}
/* Output
3
1
2
*/

//2
const object1 = {

	property1: 20

};

console.log(Object.is(object1));//false

//3
var x = 1;

function func(){
   
	if (!x){
		var x=2;
	}

	console.log(x);
}

func();//2


//4
const dateEvent = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));


console.log (dateEvent.toLocaleString('en-IN', { timeZone: 'UTC' }));//20/12/2012, 3:00:00 am