/**
 * Description: Function Borrowing
 *              Implicitt and explicit binding using call,apply and bind methods
 */
const user1 = {
    userName : "Deepak",
    age : 40,
    displayMessage : function(){
        console.log("We are in inmplicit binding");
    }
}

const user2 = {
    userName : "Prakash",
    age : 50
}

const user3 = {
    userName : "Rahul",
    age : 25
}

function sayHi(degree, year){
    console.log(this.userName, degree, year);
}

//Explicit binding
sayHi.call(user1, 'B tech', 2022);
sayHi.call(user2, 'B tech CS', 2015);

sayHi.apply(user1, ["B. Tech", 2016]);
sayHi.apply(user2, ["B. Tech. CS", 2020]);

//Using the bind method
const result = sayHi.bind(user3,"B tech. Comp. Sci.");
result(2023);