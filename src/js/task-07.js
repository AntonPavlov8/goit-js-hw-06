const fontSizeInput = document.querySelector("#font-size-control");
const changableText = document.querySelector("#text");

changableText.style.fontSize = fontSizeInput.value + "px";

fontSizeInput.addEventListener(
  "input",
  (e) => (changableText.style.fontSize = e.target.value + "px")
);
