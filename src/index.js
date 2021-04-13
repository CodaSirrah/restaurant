import displayController from "./page-load"
import {displayTabs} from "./tabs"
import {createHeader, createMenu, createButtons, createCarousel, menuLastClone, menuFirstClone, carousel, menuDescription} from "./menu"
import displayContact from "./contact"
import ramen from "./assets/images/ramen.jpeg"
import burger from "./assets/images/burger.jpeg"
import falafel from "./assets/images/falafel.jpeg"
import pancakes from "./assets/images/pancakes.jpeg"
import location from "./assets/images/map.png"
const content = document.getElementById("content");

displayTabs();
checkTabs();
displayController().createHeadline(content);
displayController().createImage(content);
displayController().createInformation(content);

function checkTabs() {
    const allInputs = document.querySelectorAll("input");
    for (let i = 0; i <= allInputs.length -1; i++) {
        allInputs[i].addEventListener("click", () => {
            while (content.hasChildNodes() && content.childNodes.length > 1) {
                content.removeChild(content.childNodes[1]);
            }
            for (let j = 0; j <= allInputs.length - 1; j++) {
                document.querySelectorAll("input")[j].checked = false;
            }
            if (allInputs[i].id ===  "tab1") {
                displayController().createHeadline(content);
                displayController().createImage(content);
                displayController().createInformation(content);

            } else if (allInputs[i].id === "tab2") {
                createHeader(content);
                createCarousel(content);
                createButtons(document.querySelector(".carousel-container"));
                menuLastClone(document.querySelector(".carousel-slide"), pancakes);
                createMenu(document.querySelector(".carousel-slide"), ramen);
                createMenu(document.querySelector(".carousel-slide"), burger);
                createMenu(document.querySelector(".carousel-slide"), falafel);
                createMenu(document.querySelector(".carousel-slide"), pancakes);
                menuFirstClone(document.querySelector(".carousel-slide"), ramen);
                menuDescription(content);
                carousel(content);
                
            } else {
                displayContact().displayAddress(content, location);
            }
            allInputs[i].checked = true;
        })
    }
};