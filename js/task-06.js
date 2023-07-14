const textInput = document.querySelector("#validation-input");
const inputLength = Number(textInput.getAttribute("data-length"));
console.log(`Enter ${inputLength} symbols!`);

/* textInput.addEventListener("blur", validateInput => {
  if (textInput.value.length === inputLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}) */

textInput.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  textInput.classList.remove("valid", "invalid");
  if (inputLength === event.currentTarget.value.length) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid")
  }
}