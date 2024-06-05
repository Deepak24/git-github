/**
 * Description: Masking the char
 */
const str2 = "123456789987654321";// 12345678998765####

const maskChar = "#".repeat(4);
const result = str2.slice(0, str2.length - 4) + maskChar;
console.log(result);

///Task - we can add masking for odd or even number of char
// We can create for loop for above string masking