/**
 * NodeJS - Example - to use module
 */

import {TITLE, add, Test} from "./newmodule.js";
console.log(TITLE);
console.log("The sum is ", add(10, 20));
const obj = new Test();
obj.testFunc();