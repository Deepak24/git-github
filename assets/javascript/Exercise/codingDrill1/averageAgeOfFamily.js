/**
 * Description: Find the Average age of family member
 */
const familyMember = [
    {
        famName: "Deepak",
        age : 35
    },
    {
        famName : "Father",
        age : 56
    },
    {
        famName : "Mother",
        age : 55
    },
    {
        famName: "Wife",
        age : 35
    }

]
const result = familyMember.reduce((acc, cur) => acc + cur.age, 0);
const aveAge = result / familyMember.length;
console.log(aveAge);