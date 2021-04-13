const createMenu = (target, image) => {
    let img = document.createElement("img");
    img.classList.add("food");
    img.src = image;
    target.appendChild(img);
}

const createHeader = target => {
    let heading = document.createElement("h1");
    heading.innerHTML = "Our Menu";
    let header = document.createElement("header");
    header.appendChild(heading);
    target.appendChild(header);
}

const createButtons = target => {
    let button1 = document.createElement("i");
    let button2 = document.createElement("i");
    button1.classList.add("fas");
    button2.classList.add("fas");
    button1.classList.add("fa-arrow-left");
    button2.classList.add("fa-arrow-right");
    button1.setAttribute("id", "prevBtn");
    button2.setAttribute("id", "nextBtn");
    target.appendChild(button1);
    target.appendChild(button2);
}

const createCarousel = target => {
    let carouselContainer = document.createElement("div");
    let carouselslide = document.createElement("div");
    carouselContainer.classList.add("carousel-container");
    carouselslide.classList.add("carousel-slide");
    carouselContainer.appendChild(carouselslide);
    target.appendChild(carouselContainer);
}

const menuLastClone = (target, image) => {
    let img = document.createElement("img");
    img.classList.add("food");
    img.setAttribute("id", "lastClone");
    img.src = image;
    target.appendChild(img);
}

const menuFirstClone = (target, image) => {
    let img = document.createElement("img");
    img.classList.add("food");
    img.setAttribute("id", "firstClone");
    img.src = image;
    target.appendChild(img);
}

const carousel = () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    const description = document.querySelector(".description");

    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    let counter = 1;
    let size = 600;
    if (document.querySelector(".food").clientWidth === 400) 
        size = 400;
    if (document.querySelector(".food").clientWidth === 280) 
        size = 280;
    
   

    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

    nextBtn.addEventListener("click", () => {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
        if (counter === 1 || counter === 5) description.innerHTML = "A Delicious umami ramen with a rich miso profile."
        if (counter === 2) description.innerHTML = "Crispy fried tofu, fresh lettuce, red onion and tomato. Oozing with our house special sauce. All housed in our delicious brioche buns."
        if (counter === 3) description.innerHTML = "Healthy but hearty. This falafel rice bowl is dream combo."
        if (counter === 4) description.innerHTML = "Banana and blueberry pancakes. Nothing beats this classic!"
    })

    prevBtn.addEventListener("click", () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
        if (counter === 1 || counter === 5) description.innerHTML = "A Delicious umami ramen with a rich miso profile."
        if (counter === 2) description.innerHTML = "Crispy fried tofu, fresh lettuce, red onion and tomato. Oozing with our house special sauce. All housed in our delicious brioche buns."
        if (counter === 3) description.innerHTML = "Healthy but hearty. This falafel rice bowl is dream combo."
        if (counter === 4 || counter === 0) description.innerHTML = "Banana and blueberry pancakes. Nothing beats this classic!"
    })

    carouselSlide.addEventListener("transitionend", () => {
        if (carouselImages[counter].id === "lastClone") {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
        }
        if (carouselImages[counter].id === "firstClone") {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
        }
    })
}

const menuDescription = target => {
    let text = document.createElement("p");
    text.innerHTML = "A Delicious umami ramen with a rich miso profile."
    text.classList.add("description");
    target.appendChild(text);
}

export {createHeader, createMenu, createButtons, createCarousel, menuLastClone, menuFirstClone, carousel, menuDescription}

/*
"Crispy fried tofu, fresh lettuce, red onion and tomato. Oozing with our house special sauce. All housed in our delicious brioche buns."
"Healthy but hearty. This falafel rice bowl is dream combo."
"Banana and blueberry pancakes. Nothing beats this classic!"


*/