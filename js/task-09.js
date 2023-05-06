function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
button.addEventListener("click", changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = `${body.style.backgroundColor}`;
  // colorEl.textContent = getRandomHexColor();
}
