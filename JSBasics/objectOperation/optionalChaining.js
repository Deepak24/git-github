/**
 * Description: JS Optional chaining - ‘?.’ 
 *              - In optional chaninig we can use ?. to check whether propery is pressent in the objet or not
*               - Avoid unneccesary use of optional chaining
 */

const objPerson = {
    perName : "Deepak",
    age : 34,
    // address : {
    //     street : "MG Road",
    //     city : "Pune",
    //     state : "Maharashtra"
    // },
    likes : "Reading writing singing eating",
    getDisplayMessage : function() {
        console.log("We are in object function");
    }
}

// console.log(objPerson.address.landmark);

if( objPerson.address !== undefined ) {
    console.log(objPerson.address.city);
} else{
    console.log("Person object is not found.");
}

//Use of ? in below console statement is called as optional chaining
console.log(objPerson.address?.city);//Output - undefined
objPerson.getDisplayMessage();

console.log(objPerson.getDisplayAddress?.());//Output - undefined

//object optional chaining
const user = {
    dog: {
      name: "Alex"
    }
  };
   
  console.log(user.cat?.name); //undefined
  console.log(user.dog?.name); //Alex
//   console.log(user.cat.name);

//Optional chaining with function

let user1 = () => console.log("In Function optional chaning - Alex");
let user2 = {
  dog(){
    console.log("I am Alex");
  }
}
let user3 = {};
 
user1?.();       // Alex
user2.dog?.();   // I am Alex
// user3.dog();     // ERROR - Uncaught TypeError:
                 // user3.dog is not a function.
user3.dog?.();   // Will not generate any error.