/**
 * Description: JS Constructor Function
 *              Constructor are functions which executed with new keyword
 */
function User(){
    console.log("Called as Construtor fn");
}
  
const user = new User();
console.log(user);


function NewUser(name,age){
    (this.name=name),(this.age=age);
}
  
  const user1 = new NewUser("Prakash",27);
  const user2 = new NewUser("Ashish",25);
  const user3 = new NewUser("Sadaf",25);
  const user4 = new NewUser("Rohan",28);
  const user5 = new NewUser("Deepak", 45);
  
  console.log(user1);
  console.log(user2);
  console.log(user3);
  console.log(user4);
  console.log(user5);
  
  