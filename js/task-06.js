const textInputE1 = document.querySelector("input#validation-input");
const textRequiredLength = Number(textInputE1.dataset.length);

textInputE1.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === textRequiredLength) {
        textInputE1.classList.add("valid");
        textInputE1.classList.remove("invalid");
    } else {
        textInputE1.classList.add("invalid");
        textInputE1.classList.remove("valid");
    }
});