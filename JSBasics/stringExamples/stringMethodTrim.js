/**
 * Description: JS trim method
 */

const strText = "   Hello this is sample text     ";
console.log(strText);
console.log("This is trimmed text \n" + strText.trim());

console.log(strText.trim().substring(0, 5));

//trimleft or trtimStart
function funcTrimLeft() {
    var strName = "  Deepak Khamkar      ";
    var st = strName.trimStart();
    console.log(st);
}
funcTrimLeft();


//trimright or trtimEnd
function funcTrimEnd() {
    var strName = "  Deepak Khamkar      ";
    var strRt = strName.trimEnd();
    console.log(strRt);
}
funcTrimEnd();