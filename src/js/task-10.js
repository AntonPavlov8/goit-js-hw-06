function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", () => {
  const fragment = document.createDocumentFragment();
  const numberOfBoxes = document.querySelector("input[type='number']").value;

  for (let i = 0; i < numberOfBoxes; i++) {
    const div = document.createElement("div");
    const size = 30 + i * 10;
    div.setAttribute(
      "style",
      `width:${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`
    );
    fragment.appendChild(div);
  }

  boxes.append(fragment);
});

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
