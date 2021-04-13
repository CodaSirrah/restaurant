let displayContact = () => {
    let displayAddress = (target, src) =>{
        let heading = document.createElement("h1");
        heading.innerHTML = "Contact Us";
        let header = document.createElement("header");
        header.appendChild(heading);
        target.appendChild(header);

        let img = document.createElement("img")
        let imgContainer = document.createElement("div")
        let address = document.createElement("p");
        address.classList.add("center");
        address.classList.add("address");
        address.innerHTML = "Address: 19 Rue Amélie, 75007 Paris, France";
        const phone = document.createElement("p");
        phone.innerHTML = "Phone: 0123, 456, 789"
        phone.classList.add("phone");
        phone.classList.add("center");
        
        imgContainer.classList.add("map-container");
        img.classList.add("map");
        img.src = src;
        target.appendChild(phone);
        target.appendChild(address)
        imgContainer.appendChild(img);
        target.appendChild(imgContainer);
    }
    return {displayAddress};
}

export default displayContact