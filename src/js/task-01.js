const catagoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${catagoriesEl.length}`); // catagories

catagoriesEl.forEach((element) => {
  const catagoryName = element.querySelector("h2").innerText;
  const childrenCount = element.querySelectorAll("li").length;
  console.log(`Category: ${catagoryName}`);
  console.log(`Elements: ${childrenCount}`);
  //catagory name and number of elements
});
