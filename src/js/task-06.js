const nameInput = document.querySelector("#validation-input");

nameInput.addEventListener("blur", () => {
  nameInput.value.length === 6
    ? (nameInput.className = "valid")
    : (nameInput.className = "invalid");
});
