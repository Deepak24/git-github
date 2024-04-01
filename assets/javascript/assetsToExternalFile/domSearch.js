/**
 * Description: This is external JS or asset file of domSearching file
 */
// let startBtn = document.getElementById("btnSubmit");
// console.log(startBtn);

// let stopBtn = document.getElementById("btnReset");
// console.log(stopBtn);

//We can use querySelector for getting elements 
let startBtn = document.querySelector(".start");
console.log(startBtn);

let stopBtn = document.querySelector("#btnStop");
console.log(stopBtn);

let countBtn = document.querySelector(".count");
let countVal = 0;
//With querySelectorAll

let getAllBtn = document.querySelectorAll(".button");
console.log(getAllBtn);

//Event Listener with above variables
function showMessage() {
    console.log("Button clicked");
}

// startBtn.addEventListener("click", showMessage);
startBtn.addEventListener("click", () => {
    console.log("Button Clicked with arrow function");
    if ( startBtn.innerText == "Start") {
        startBtn.innerText = "Clicked";
        startBtn.innerHTML = "<span>Lets begin</span>";
    } else {
        startBtn.innerText = "Start";
    }
});

// change count on click of Increased count button
countBtn.addEventListener("click", () => {
    countVal++;
    console.log(countVal);
});

stopBtn.addEventListener("click", () => {
    console.log("Event Listener ");
    // stopBtn.classList.add("btnRed");
    stopBtn.classList.toggle("btnRed");
});