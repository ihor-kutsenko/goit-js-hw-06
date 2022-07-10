const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector("#value");
let counterValue = 0;

const handleOnClickDown = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

const handleOnClickUp = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleOnClickDown);
incrementBtn.addEventListener("click", handleOnClickUp);

//  2 варіант
//
// decrementBtn.addEventListener("click", () => {
//   counterValue -= 1;
//   counterEl.textContent = counterValue;
// });
// incrementBtn.addEventListener("click", () => {
//   counterValue += 1;
//   counterEl.textContent = counterValue;
// });
