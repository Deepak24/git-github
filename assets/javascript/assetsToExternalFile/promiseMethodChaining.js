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
})
.catch(err=> console.log(err) )
.then(function (hotelId){
    return payment(hotelId);
})

//Printing logs
.catch((err) => console.log(err))
.then((response) => console.log(response))
.catch((error) => console.log(error.message));

