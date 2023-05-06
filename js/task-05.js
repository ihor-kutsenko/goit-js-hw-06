const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", () => {
  if (nameInputEl.value !== "") {
    nameOutputEl.innerHTML = nameInputEl.value.trim();
  } else {
    nameOutputEl.innerHTML = "Anonymous";
  }
});

// variant 2

// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");



// nameInput.addEventListener("input", () => {
//   if (nameInput.value === "") {
//   return  nameOutput.textContent = "Anonymous";

//   }
//    nameOutput.textContent = nameInput.value;
// });
