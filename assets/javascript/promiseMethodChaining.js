/**
 * Description: Promise Method chaining
 */

const hotelName = "The Taj Palace";

function bookHotel(hotel){
    const promise = new Promise((resolve, reject) => {
        const hotelId = "xyz123";
        if(!validateHotel()){
            const error = new  Error("no Hotel Found");
            reject(error);
        }

        if(hotelId && validateHotel) {
            setTimeout(() => {
                resolve(hotelId);
            }, 3000);

        }
    });
    return promise;
}

function payment(hotelId) {
    return new Promise((resolve) => {
        resolve("Payment successful!!");
    })
}

let hotel = bookHotel(hotelName);
hotel
.then((hotelId) => {
    console.log({ hotelId })
    return hotelId;
})//1
.catch(err=> console.log(err) )
.then(function (hotelId){
    return payment(hotelId);
})//2
.catch((err) => console.log(err))
.then((response) => console.log(response))//3
.catch((error) => console.log(error.message));

