const fontSizeControlE1 = document.querySelector("input#font-size-control");
const textE1 = document.querySelector("span#text");


fontSizeControlE1.addEventListener("input", (event) => {
    textE1.style.fontSize = event.currentTarget.value + "px";
});