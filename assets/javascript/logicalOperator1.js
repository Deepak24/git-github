/**
 * Logical operators with statement
 * Or | -> if atleast one condition is true then || will return true otherwise || will return false
 * And & -> All the conditions must be true then && will return true otherwise && will return false
 * Not !
 */
const physics = 90;
const chemistry = 85;
const Math = 90;
const biology = 96;

if( physics > 85 && chemistry > 85 && Math > 85 ) {
    console.log("You are eligible for Engineering");
} else {
    console.log("You are not eligible to Engineering");
}

//Or operator
if( physics > 90 || Math > 85 || chemistry > 89) {
    console.log("You are eligible for Engg..");
}else {
    console.log("You are not eligible for Engg..");
}

const isStudentEligible = false;

if(!isStudentEligible) {
    console.log("You are eligible for Engg..");
}else {
    console.log("You are not eligible for Engg..");
}