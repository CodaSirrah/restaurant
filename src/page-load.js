const displayController = () => {
    
    const createHeadline = (target) => {
            let container = document.createElement("div");
            let header = document.createElement("h1");
            header.innerHTML = "Vegan btw";
            container.classList.add("hContainer");
            container.appendChild(header);
            target.appendChild(container);
    }

    const createImage = (target) => {
        let img = document.createElement("img");
        img.src = "https://cdn.viva.org.uk/wp-content/uploads/2020/11/EFF-Banner.jpg";
        img.classList.add("vegan");
        let container = document.createElement("div");
        container.classList.add("center");
        container.appendChild(img);
        target.appendChild(container);
    }

    const createInformation = (target) => {
        let section = document.createElement("section");
        section.classList.add("center");
        let p1 = document.createElement("p");
        p1.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.`;
        section.appendChild(p1);
        target.appendChild(section);
    }
    return {createHeadline, createImage, createInformation};
}

export default displayController