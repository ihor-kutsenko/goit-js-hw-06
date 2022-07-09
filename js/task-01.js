const category = document.querySelectorAll(".item");
const numberCategory = category.length;
console.log("Number of categories:", numberCategory);

[...category].forEach((element, index) => {
  const nameOfCategories = element.querySelector("h2");
  const numberOfCategory = element.querySelectorAll("li");
  console.log(`Category: ${nameOfCategories.textContent}`);
  console.log(`Elements: ${numberOfCategory.length}`);
});
