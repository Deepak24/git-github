/**
 * Description: JS Event Delegation
 */
let btnContainer = document.querySelector("#btnContainer");

//Event Delegation
btnContainer.addEventListener("click", (event) => {
    let btnText = event.target.innerText;
    if( btnText === "Red" ) {
        event.target.classList.toggle("btnRed");
    }

});