/**
 * Description: Private Class properties
 */

class User {
    #id = 123;
    
}

const user = new User();
user.#id = 321;
console.log(user);