const inputE1 = document.querySelector("input#name-input");
const outputE1 = document.querySelector("span#name-output");

inputE1.addEventListener("input", (event) => {
    outputE1.textContent = event.currentTarget.value;
    if (inputE1.value === "") outputE1.textContent = `Anonymous`;
});