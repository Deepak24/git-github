/**
 * Description: This keyword exercises
 */

//Example 1
function displayMessage(){
    console.log(this);
}

const user1 = {
    userName : "Deepak",
    age : 35,
    showName: displayMessage
}

console.log(user1);//{ userName: 'Deepak', age: 35, showName: [Function: displayMessage] }
user1.showName();//{ userName: 'Deepak', age: 35, showName: [Function: displayMessage] }

//Example2

// function displayMessage1(){
//     console.log(this);
// }

// const user2 = {
//     userName : "Prakash",
//     showName : function () {
//         displayMessage1();
//     },
// }

// user2.showName();

//Example 3
const displayMessage3 = () => {
    console.log(this);
}

const user3 = {
    userName : "Deepak3"
}
displayMessage3.apply(user3);//{}

//Exercise 4
function User() {
    console.log(this);
}

const user4 = new User();//User {}

//Exercise 5
const person = {
    perName : "Deepak",
    sayHi : function () {
        console.log(`Welcome ${this.perName}`);
    },
};

person.sayHi();//Output - Welcome Deepak

//Exercise 6
const person2 = {
    userName : "Deepak",
    sayHi : function () {
        console.log(`Welcome ${this.userName}`);
    },
};

let person3 = person2.sayHi;
person3();//Output - Welcome undefined