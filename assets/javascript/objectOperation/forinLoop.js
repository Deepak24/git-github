/**
 * Description: JS forin loop 
 */

const list = [10, 20, 30];
let total = 0;
for (const item in list) {
    total += list[item];
}
console.log(total);

//creating new object
const courses = {
    firstCourse : "c",
    secondCourse : "C++",
    thirdCourse : "DSA"
};

//Creating new empty object
const student1 = Object.create(courses);

//Definfing student properties
student1.id = 123;
student1.firstName = "deepak";
student1.showEnrolledCourses = function() {
    console.log(courses);
}

//Iterating over all the properties
for(let prop in student1) {
    console.log(prop + " => " + student1[prop]);
}
