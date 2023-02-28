const fontSizeInput = document.querySelector("#font-size-control");
const changableText = document.querySelector("#text");

fontSizeInput.addEventListener(
  "input",
  (e) => (changableText.style.fontSize = e.target.value + "px")
);
