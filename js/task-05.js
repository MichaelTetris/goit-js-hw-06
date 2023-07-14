const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const defaultName = textOutput.textContent;

textInput.addEventListener("input", handleInput => {
  textOutput.textContent = textInput.value === ""? `${defaultName}` : textInput.value;
  console.log(textOutput.textContent);
});

/* textInput.addEventListener("input", (event)=> {
  if (textInput.value === "") {
    textOutput.textContent = defaultName;
  } else {
    textOutput.textContent = event.currentTarget.value;
  }
}); */