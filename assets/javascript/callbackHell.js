/**
 * Description: Learning the callback hell
 *              Callback Hell - When code is growing horizonally then it's called as callback hell 
 *                              and it will become pyramid of doom
 *              Pyramid of doom
 *              Inversion of control
 */

//bookHotel -> proceedPayment -> ShowBookingStatus -> updateBookingHistory

//Problem of horizontal growing will resolve by promises

//Example with the flow - how code is growing horizontally as callback hell
bootHotel(hotelId, function(){
    if(error) {
        handleerror
    } else {
        proceedPayment(hotelId, function() {
            if(error) {
                handleerror
            } else {
                ShowBookingStatus(hotelId, function(){
                    if(error) {
                        handleerror
                    } else {
                        updateBookingHistory(hotelId, function(){
                            if(error) {
                                handleerror
                            } else {
                                success
                            }
                        })
                    }
                })
            }
        })        
    }
})