/**
 * Description: Create promise
 */

const isRequestSuccessful = true;

let promise = new Promise((resolve, reject) => {
    if(isRequestSuccessful) {
        setTimeout(() => {
            resolve("Promise Resolved");
        }, 3000);
    } else {
        const error = new Error("Something Went Wrong!!");
        reject(error.message);
    }
});

// console.log(promise);
promise
.then((response) => console.log(response))
.catch(function(error) {
    console.log(error);
});