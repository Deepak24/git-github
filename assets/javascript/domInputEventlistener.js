/**
 * Description : Input event listener
 *              Mouse event
 */

let inputField = document.querySelector("#empName");
let inputKeyListener = document.querySelector("#keyListener");

// inputField.addEventListener("change", () => {
//     console.log(inputField.value);
// });

inputField.addEventListener("focus", () => {
    console.log(inputField.value);
});

inputField.addEventListener("keyup", () => {
    console.log(inputField.value);
});

inputKeyListener.addEventListener("mousedown", (event) => {
    console.log(inputKeyListener.value);
    let xCor = event.pageX;
    let yCor = event.pageY;
    let cor = `X cor ${xCor} Y cor ${yCor}`;
    console.log(cor);
});