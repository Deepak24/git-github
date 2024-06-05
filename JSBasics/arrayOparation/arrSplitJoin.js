/**
 * Description: JS method split and join
 */

//JS method split
const strInput = "May I come in?";
const arrOfChar = strInput.split("");
console.log(arrOfChar);
console.log(arrOfChar.reverse());

//Join - converts array into string 
const strName = "Deepak Khamkar";
const strJoin = arrOfChar.join("");
console.log(strJoin);


//Split with function
function checkSplit(){
    var strOriginal = "It is Great Day!";
    var arrSplit = strOriginal.split(" ", 2);
    console.log(arrSplit);
}

checkSplit();

//Join with function

function funcJoin(){
    var arrNum2 = [1, 2, 6, 8, 7, 3];
    const strJoin = arrNum2.join();
    console.log(strJoin);
    const strJoin2 = arrNum2.join("");
    console.log(strJoin2);
    const strJoin3 = arrNum2.join("|");
    console.log(strJoin3);
}
funcJoin();