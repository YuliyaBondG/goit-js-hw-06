function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorE1 = document.querySelector("button.change-color");


const spanColorE1 = document.querySelector("span.color");

const bodyE1 = document.querySelector("body");


btnChangeColorE1.addEventListener("click", switchColor);

function switchColor() {
  const randomColor = getRandomHexColor();

  bodyE1.style.backgroundColor = randomColor;

  spanColorE1.textContent = randomColor;
}
