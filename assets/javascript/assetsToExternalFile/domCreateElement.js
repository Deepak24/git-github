/**
 * Description: JS Create Element
 */

const parentElement = document.getElementById("parentContainer");

const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");

const cardImage = document.createElement("img");
cardImage.classList.add("imageClass");

cardImage.setAttribute("src", "https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20plan%20to%20Holiday%20in%202021.jpg");
cardImage.setAttribute("alt", "TravelCard");

cardContainer.appendChild(cardImage);

const cardTextElement = document.createElement("span");
cardTextElement.innerHTML = "Journey of thousand miles start with single step!";

cardContainer.appendChild(cardTextElement);

parentElement.appendChild(cardContainer);