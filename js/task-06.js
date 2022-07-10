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
