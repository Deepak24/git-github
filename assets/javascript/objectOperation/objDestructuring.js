/**
 * Description: JS objecct destructuring
 *              Destructuring - It means assigning the values to different variables 
 *                              or unpacking the object
 * 
 */

let objUser = {
    userName : "Deepak",
    age : 45,
    address : {
        road : "MG Road",
        area : "Camp",
        city : "Pune"
    },
    courses : [ 'html', 'css', 'java', 'javascript' ]
}


// let {userName : name1} = objUser;
// console.log(name1);
// console.log(typeof name1);

// let {userName, address : {road, area, city}, curses} = objUser;
// console.log(road);
// console.log(area);

let {userName, ...rest} = objUser;
console.log(userName);
console.log(typeof userName);
console.log(rest);


//Destructuring with object
const employees = {
    engineers: {
        emp1 : {
            id : 1,
            emName : "Deepak K",
            Occupation : "Front end Engineer"
        },
        emp2 : {
            id : 2,
            emName : "Pradip D",
            Occupation : "Data Scientist"
        }
    },
    placement : {
        emp3 : {
            id : 3,
            emName : "Dipen S",
            Occupation : "sr. Executive"
        }
    },
    youtube : {
        emp4 : {
            id: 4,
            emName: "Rohit S",
            Occupation: "YouTube Manager"
        }
    }
}

let {engineers: {emp2: {emName, Occupation}} } = employees;
console.log(emName, Occupation);

//object 
let {youtube} = employees;
console.log(youtube);