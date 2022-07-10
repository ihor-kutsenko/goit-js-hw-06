const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", () => {
  if (nameInputEl.value !== "") {
    nameOutputEl.innerHTML = nameInputEl.value.trim();
  } else {
    nameOutputEl.innerHTML = "Anonymous";
  }
});
