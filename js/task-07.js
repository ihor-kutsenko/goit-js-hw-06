const textInput = document.querySelector("input");
const textEl = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
