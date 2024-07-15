/**
 * Description: Private Class properties
 */

class User {
    id = 123;
    
}

const user = new User();
// user.#id = 321;//Output - Giving Syntax error - Private field '#id' must be declared in an enclosing class
console.log(user);