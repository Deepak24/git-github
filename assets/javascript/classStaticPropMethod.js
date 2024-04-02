/**
 * Description: Static properties and static methods
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
const child2 = new Children("Prem", 25 );
const child3 = new Children("Yash", 15 );

let arr = [child1, child2, child3];
console.log(arr.sort(Children.sortByAge));