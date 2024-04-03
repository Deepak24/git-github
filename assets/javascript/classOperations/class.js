/**
 * Description: Class
 */

class User {
    constructor(userName, role, isAdmin, isLoggedIn) {
        this.userName = userName;
        this.role = role;
        this.isAdmin = isAdmin;
        this.isLoggedIn = isLoggedIn;
    }

    displayInfo() {
        console.log(`${this.userName} is a ${this.role}`);
    }
}

const user1 = new User("Deepak", "Mentor", false, true);
const user2 = new User("Prakash", "Mentor", false, true);
const user3 = new User("Sakshi", "Mentor", false, true);
console.log(user1.displayInfo());
console.log(user2);

