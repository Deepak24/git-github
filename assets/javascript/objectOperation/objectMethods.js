/**
 * Description: JS object methods
 *              - Methods as entries(), keys(), values()
 *              1) Object.entries(): returns an array containing sub-arrays that contain Key-value pair 
 *                  from the Original Object.
 *              2) Object.keys(): this method returns an array containing all the keys of an Object.
 *              3) Object.values(): this method returns an array containing all the values of the Object
 */
const objPerson = {
    perName : "Deepak",
    age : 40,
    address: {
        road : "MG Road",
        city : "Pune",
        state : "MH"
    }
};

const objEntries = Object.entries(objPerson);
console.log(objEntries);

//get keys array
const arrKeys = Object.keys(objPerson);
console.log(arrKeys);

//get values array
const arrValues = Object.values(objPerson);
console.log(arrValues);

