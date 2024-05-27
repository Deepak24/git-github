/**
 * Description: Count the frequency of all number in an array, 
 *              return the number with the max frequency, if 2 or more numbers have the same 
 *              max frequency then return the highest number  *              
 */

const arr1 = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5, 3, 3];

function getNumberWithMaxFreq(arr1) {
    let maxCount = maxKeys = 0;
    let arrMaxFreqKeys = [];

    //Get the frequency of all numbers
    const objNumberFreq = arr1.reduce((acc, cur) => 
    cur in acc ? {...acc, [cur] : acc[cur] + 1 } : {...acc, [cur] : 1},
    {} );

    //Get the max frequency
    const arrOfKeyValue = Object.entries(objNumberFreq);
    //Get max count occurence of number
    for ( let [key, value] of arrOfKeyValue) {
        if( maxCount < value ){
            maxCount = value;
        }
    }

    //Get the numbers with max frequency 
    for( let [key, value] of arrOfKeyValue ) {
        if( value === maxCount ){
            arrMaxFreqKeys = [...arrMaxFreqKeys, key];
        }
    }

    //Get the key with max freq and max number
    for(let key of arrMaxFreqKeys) {
        if(maxKeys < key){
            maxKeys = key;
        }
    }
    return maxKeys;
}

const result = getNumberWithMaxFreq(arr1);
console.log(result);