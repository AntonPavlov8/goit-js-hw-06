const value = document.querySelector("#value");
const decrementBt = document.querySelector("[data-action='decrement']");
const incrementBt = document.querySelector("[data-action='increment']");
console.log(decrementBt);
let counterValue = 0;
decrementBt.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});

incrementBt.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
