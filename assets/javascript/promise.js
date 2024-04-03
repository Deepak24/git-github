/**
 * Description: Promise -  Promise is an object that has the status of async operation, 
 *                         and it's corresponding value
 */

// let promise = bookHotelAPI(hotelId) {
//     stateRequest -> pending/fullfiled / rejected
//     response -> value
// }

const URL = "https://03ebffcbbfd840119aa1798e0ce9f6ab.api.mockbin.io/";

let promise = fetch(URL);
console.log(promise);