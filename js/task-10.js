function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");

const btnCreateEl = document.querySelector("[data-create]");

const btnDestroyEl = document.querySelector("[data-destroy]");

const boxesEl = document.querySelector("#boxes");


function createBoxes(newBoxes) {
  
  let width = 30;
  let height = 30;
  
  for (let i = 1; i < newBoxes + 1; i += 1) {
    
    const newDiv = document.createElement("div");
    
    newDiv.classList.add("boxes");
    
    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    width += 10;
    height += 10;
    
    newDiv.style.backgroundColor = getRandomHexColor();
    
    boxesEl.append(newDiv);
  }
}


btnCreateEl.addEventListener("click", (event) => {
  const numBoxes = Number(inputEl.value);
  createBoxes(numBoxes);
});


function destroyBoxes() {
  boxesEl.innerHTML = "";
}
btnDestroyEl.addEventListener("click", () => {
  destroyBoxes();
});