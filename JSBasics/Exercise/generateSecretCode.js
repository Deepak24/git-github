/**
 * Description: Generating the secrete code
 * Input - Deepak
 * Encoded - By 2 char
 * OutPut - Fggrcm
 */

const strInput = "Deepak";

const getEncodedStr = str => {
    let encodedStr = '';
    let currPost = 0, newPos = 0;
    for ( let i = 0; i < str.length ; i++) {
        currPost = str.charCodeAt(i);
        newPos = currPost + 2;
        encodedStr += String.fromCharCode(newPos);
    }
    return encodedStr;
}

const strEncoded = getEncodedStr(strInput);
console.log(strEncoded);
