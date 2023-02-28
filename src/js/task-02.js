const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.getElementById("ingredients");
ingredients.map((el) => {
  const listItem = document.createElement("li");
  listItem.textContent = el;
  listItem.className = "item";
  ingredientsEl.append(listItem);
});
