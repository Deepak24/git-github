/**
 * Description: Sub String
 */

const strName = "Deepak Khamkar";

for (let i=0; i < strName.length; i++) {
    for(  let j= i+1; j < strName.length; j++) {
        console.log(strName.slice(i, j));
    }
}