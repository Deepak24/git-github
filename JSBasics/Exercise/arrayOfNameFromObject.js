/**
 * Description:  Return array of names from an object - Chaining method
 */

const employees = [
    {
        empName : "Deepak",
        noYearExp : 6
    },
    {
        empName : "Raj",
        noYearExp : 3
    },
    {
        empName : "Rajendra",
        noYearExp: 4
    },
    {
        empName : "Ganesh",
        noYearExp : 7
    }
]

const result = employees.filter( employee => employee.noYearExp > 3 ).map( employee => employee.empName );
console.log(result);