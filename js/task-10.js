function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const [input, createBtn, destroyBtn] =
  document.querySelector("#controls").children;
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const array = [];
  for (let i = 1; i <= input.value; i += 1) {
    const container = document.createElement("div");
    container.style.height = container.style.width = `${20 + i * 10}px`;
    container.style.backgroundColor = getRandomHexColor();
    array.push(container);
  }
  boxes.append(...array);
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
