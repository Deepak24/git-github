/**
 * Description: Count occurrences of distinct element
 * OutPut - {a:2, b:2, c:2, d:2}
 */
/**
 * Sum of even number and sum of odd number and add to object
 */

const arr1 = [
    "a", "b", "c", "c", "d",
    "e", "f", "b", "f", "a"
];

const result = arr1.reduce((acc,cur) => cur in acc ? {...acc, [cur]: acc[cur] +1} : {...acc, [cur]: acc[cur]});
