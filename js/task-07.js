const inputElement = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

inputElement.addEventListener("input", sizeText => {
  textElement.style.fontSize = inputElement.value + "px";
})