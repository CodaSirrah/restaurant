function displayTabs() {
    let tabContainer = document.createElement("nav");
    tabContainer.setAttribute("id", "myTabs");
    let input1 = document.createElement("input");
    input1.setAttribute("type", "radio");
    input1.setAttribute("id", "tab1");
    input1.setAttribute("name", "tab1");

    input1.checked = true;
    tabContainer.appendChild(input1);

    let label1 = document.createElement("label");
    label1.setAttribute("class", "tabButton");
    label1.setAttribute("for", "tab1");
    tabContainer.appendChild(label1);

    let tabs1 = document.createElement("div")
    tabs1.classList.add("tab");
    tabContainer.appendChild(tabs1);

    let tab1 = document.createElement("div");
    tab1.classList.add("tabContents");
    tab1.innerHTML = "Home";
    tabs1.appendChild(tab1);


    let input2 = document.createElement("input");
    input2.setAttribute("type", "radio");
    input2.setAttribute("id", "tab2");
    input2.setAttribute("name", "tab2");

    tabContainer.appendChild(input2);

    let label2 = document.createElement("label");
    label2.setAttribute("class", "tabButton");
    label2.setAttribute("for", "tab2");
    tabContainer.appendChild(label2);

    let tabs2 = document.createElement("div");
    tabs2.classList.add("tab");
    tabContainer.appendChild(tabs2);

    let tab2 = document.createElement("div");
    tab2.classList.add("tabContents");
    tab2.innerHTML = "Menu";
    tabs2.appendChild(tab2);


    let input3 = document.createElement("input");
    input3.setAttribute("type", "radio");
    input3.setAttribute("id", "tab3");
    input3.setAttribute("name", "tab3");

    tabContainer.appendChild(input3);

    let label3 = document.createElement("label");
    label3.setAttribute("class", "tabButton");
    label3.setAttribute("for", "tab3");
    tabContainer.appendChild(label3);

    let tabs3 = document.createElement("div")
    tabs3.classList.add("tab");
    tabContainer.appendChild(tabs3);

    let tab3 = document.createElement("div");
    tab3.classList.add("tabContents");
    tab3.innerHTML = "Contact";
    tabs3.appendChild(tab3);
    document.querySelector("#content").appendChild(tabContainer);
}



export {
    displayTabs
} 