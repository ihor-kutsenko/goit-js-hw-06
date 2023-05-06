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

// 2 variant
// const boxes = document.querySelector("#boxes");
// const input = document.querySelector("input");
// const createEl = document.querySelector('button[data-create]');
// const destroyEl = document.querySelector('button[data-destroy]');

// createEl.addEventListener("click", createBoxes);
// destroyEl.addEventListener("click", destroyBoxes)



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }




// function createBoxes() { 
//   let boxSize = 30;
//   let boxHTML = "";
//   for (let i = 0; i < input.value; i += 1){
//     const boxColor = getRandomHexColor();
//     const box = `<div style="width: ${boxSize}px; height: ${boxSize}px;
//      background-color: ${boxColor}"></div>`
//     ;
//     boxHTML += box;
//     boxSize += 10;
//   }
//   boxes.innerHTML = boxHTML;
// };

// function destroyBoxes() {
//   boxes.innerHTML = "";
//   input.value = "";
// }