/**
 * Description: Static properties and static methods
 *              Static methods are created inside the class 
*               but the method as whole is available to all the objects of that class
 */
class Children {
    static id = 2;
    constructor(strName, intAge, id){
        this.strName = strName;
        this.age = intAge;
        this.id = Children.id++;
    }
    static sortByAge(a, b) {
        return a.age - a.age;
    }
}

const child1 = new Children("Deepak", 35);
console.log(child1);
// const child = new Children("Deepak1", 34);
// console.log(child);
const child2 = new Children("Prem", 15 );
const child3 = new Children("Yash", 25 );

let arr = [child1, child2, child3];
console.log(arr.sort(Children.sortByAge));