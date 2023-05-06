const textInput = document.querySelector("input");
const validInput = parseInt(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === validInput) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
});
// 2 variant

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", () => {
  
//   if (input.value.length === Number(input.dataset.length)) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid")
//   }

// })