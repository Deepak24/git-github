/**
 * Description : Event bubbling and capturing
 */

let form = document.querySelector("#form");
let div = document.querySelector("#div");
let paraPtag = document.querySelector("#para");

paraPtag.addEventListener("click", () => {
    alert("Inside Para");
}, true);

div.addEventListener("click", () => {
    alert("div tag");
}, true);

form.addEventListener("click", () => {
    alert("Form tag");
}, true);
