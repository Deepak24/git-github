/**
 * Description: JS Event Delegation
 */
let btnContainer = document.querySelector("#btnContainer");

btnContainer.addEventListener("click", (event) => {
    let btnText = event.target.innerText;
    console.log("Btn text object", btnText);
    if( btnText === "Red" ) {
        event.target.classList.toggle("btnRed");
    }

});